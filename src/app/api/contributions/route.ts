import { NextResponse } from "next/server";

type ContributionDay = {
  date: string; // YYYY-MM-DD
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

const USERNAME = "sheikh162";
const PROXY_URL = `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`;
const YEAR_DAYS = 365;

/** Map a raw count to GitHub's 0-4 intensity scale. */
function toLevel(count: number): ContributionDay["level"] {
  if (count <= 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 9) return 3;
  return 4;
}

function isoDay(d: Date): string {
  return d.toISOString().slice(0, 10);
}

/** Seed a full trailing-year map so missing days render as empty cells. */
function seedYear(): Map<string, number> {
  const map = new Map<string, number>();
  const today = new Date();
  for (let i = YEAR_DAYS - 1; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    map.set(isoDay(d), 0);
  }
  return map;
}

function toSorted(map: Map<string, number>): ContributionDay[] {
  return [...map.entries()]
    .sort(([a], [b]) => (a < b ? -1 : 1))
    .map(([date, count]) => ({ date, count, level: toLevel(count) }));
}

/**
 * Primary source: community contributions proxy (full trailing year).
 * Server-side fetch, immune to the browser TLS/CORS failures
 * that break direct client calls to this host.
 */
async function fromProxy(): Promise<ContributionDay[] | null> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);
  try {
    const res = await fetch(PROXY_URL, {
      signal: controller.signal,
      next: { revalidate: 21600 }, // 6h cache
    });
    if (!res.ok) return null;
    const json = await res.json();
    if (!Array.isArray(json?.contributions)) return null;
    return json.contributions.map(
      (day: { date: string; count: number; level: number }) => ({
        date: day.date,
        count: day.count,
        level: Math.max(0, Math.min(4, day.level ?? toLevel(day.count))),
      })
    );
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}

/**
 * Fallback source: GitHub's official public events API.
 * Unauthenticated quota is 60 req/hr per IP (fine with the 6h cache),
 * but a GITHUB_TOKEN env var raises it to 5,000/hr when set.
 * Only covers ~90 days / 300 events, so older months render flat,
 * but the panel stays up instead of erroring during proxy outages.
 */
async function fromGitHubEvents(): Promise<ContributionDay[] | null> {
  try {
    const counts = seedYear();
    const headers: Record<string, string> = {
      Accept: "application/vnd.github+json",
      "User-Agent": "portfolio-contributions",
    };
    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }
    // 300 events max; paginate 2 pages of 100 to stay well under rate limits
    for (const page of [1, 2]) {
      const res = await fetch(
        `https://api.github.com/users/${USERNAME}/events/public?per_page=100&page=${page}`,
        {
          headers,
          next: { revalidate: 21600 }, // 6h cache
        }
      );
      if (!res.ok) return page === 1 ? null : toSorted(counts);
      const events = await res.json();
      if (!Array.isArray(events) || events.length === 0) break;
      for (const event of events) {
        const day = String(event?.created_at ?? "").slice(0, 10);
        if (!counts.has(day)) continue;
        const commits =
          event?.type === "PushEvent"
            ? (event?.payload?.commits?.length ?? 1)
            : 1;
        counts.set(day, (counts.get(day) ?? 0) + commits);
      }
      if (events.length < 100) break;
    }
    return toSorted(counts);
  } catch {
    return null;
  }
}

export async function GET() {
  const proxy = await fromProxy();
  if (proxy) {
    return NextResponse.json({ contributions: proxy, source: "proxy" });
  }

  const fallback = await fromGitHubEvents();
  if (fallback) {
    return NextResponse.json({ contributions: fallback, source: "github" });
  }

  return NextResponse.json(
    { contributions: [], source: "none" },
    { status: 502 }
  );
}
