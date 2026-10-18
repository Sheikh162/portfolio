import { differenceInCalendarMonths, parse } from "date-fns";

const DATE_FORMAT = "MMM yyyy"; // e.g. "May 2025", "Jul 2027"

/**
 * Human-readable duration between two "MMM yyyy" dates, counted inclusively
 * (LinkedIn style: May 2026 - Jul 2026 = 3 mos).
 * Falls back to "now" when `end` is omitted (ongoing).
 *
 * @example formatDuration("May 2026", "Jul 2026") // "3 mos"
 * @example formatDuration("Aug 2023", "Jul 2027") // "4 yrs"
 */
export function formatDuration(start: string, end?: string): string {
  const from = parse(start, DATE_FORMAT, new Date());
  if (Number.isNaN(from.getTime())) return "";

  const to = end ? parse(end, DATE_FORMAT, new Date()) : new Date();
  let months = differenceInCalendarMonths(to, from) + 1;
  if (Number.isNaN(months) || months < 0) months = 0;

  const years = Math.floor(months / 12);
  const remaining = months % 12;

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} yr${years > 1 ? "s" : ""}`);
  if (remaining > 0) parts.push(`${remaining} mo${remaining > 1 ? "s" : ""}`);
  return parts.join(" ") || "0 mos";
}