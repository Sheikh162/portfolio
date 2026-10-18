# AGENTS.md

Project rules for AI agents working in this repository. Read this before making
changes. These are hard constraints, not suggestions — follow them and don't
re-derive them by exploring unless something looks out of date.

## What this is

Personal portfolio for **Sheikh Abdullah** (Software Engineer). Single-page,
editorial/angular aesthetic. Content is recruiter-facing, so copy accuracy and
visual consistency matter more than cleverness.

## Stack

- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript** (strict)
- **Tailwind CSS v4** — CSS-first config in `src/app/globals.css` via `@theme`.
  There is **no `tailwind.config.js`** (see `components.json`: `tailwind.config: ""`).
  Do not create one. Extend the theme with `@theme` / `@utility` in CSS.
- **shadcn/ui** (style `new-york`, RSC, neutral base) in `src/components/ui`.
  Prefer the registry over hand-writing primitives. `components.json` is the source.
- **motion** (`motion/react`) for animation · **next-themes** for theming
- **lucide-react** for icons · **sonner** for toasts

Path alias: `@/*` → `src/*`.

## Commands

```bash
npm run dev      # next dev --turbopack
npm run build    # next build
npm run lint     # next lint
npx tsc --noEmit # typecheck (run before every commit)
```

**Before committing:** `npx tsc --noEmit` and `npm run build` must both pass.

## Where things live

```
src/app/            layout, page, globals.css, font.ts, api/
src/components/ui/  shadcn primitives
src/components/motion/  Reveal, ScrollProgress, FadeImage
src/features/portfolio/
  components/   section UI (panel, profile-header, projects/, experiences/, ...)
  data/         ← SOURCE OF TRUTH for all content
  types/        content type definitions
```

**Content is data-driven.** Edit `src/features/portfolio/data/*.ts`
(`user.ts`, `projects.ts`, `experiences.ts`, `tech-stack.ts`, `social-links.ts`),
not hardcoded JSX. If you add a field, update the matching `types/*.ts`.

## Design rules (non-negotiable)

- **Sharp corners everywhere.** All `--radius-*` tokens are `0rem`. Never add
  `rounded-*` to new UI. Keep the avatar, cards, badges, buttons square.
- **Fonts:** Inter Tight (sans/body) · Instrument Serif (display, weight **400**,
  normal + italic) · Geist Mono (meta/labels/tags). No other families — a single
  source is `src/app/font.ts`.
- **Type scale (matched to reference density):** body `text-base` (16px),
  meta `text-xs` (12px), section titles `text-3xl` (30px), name
  `text-3xl sm:text-4xl` (36px). Keep new text on this scale.
- **Tracking:** body carries a flat inherited `-0.025em` (resolved at 16px =
  −0.4px). Display type must re-declare it with the `tracking-display` utility
  (`-0.02em`, defined in `@theme`) so it resolves against its own size —
  ≈−0.7px at 36px, ≈−0.6px at 30px. Apply to the name and section titles only;
  small text keeps the inherited value.
- **Layout:** single centered column, `max-w-3xl` (768px), in `src/app/page.tsx`.
- **Dark mode** defaults to `system`; never force a theme. The `.dark` tokens use
  a **warm** neutral (hue 80), deliberately not the stock cool hue ~286 — this
  matches the reference set (leerob `#1b1a19`, maggieappleton `#1c1b18`). Any new
  dark token should stay on that warm hue at the same lightness, so contrast holds.
- Section order (in `page.tsx`): Profile → SocialLinks → Overview →
  GitHubContributions → Stack → Experiences → Projects → Education.
- Separators: the hatched `SectionSeparator` sits between sections **except**
  around the social strip, which is boxed by the panel's plain screen lines.
- Motion: scroll reveals live on body content only (headers stay static);
  springs for height/collapse; respect `prefers-reduced-motion`.

## Content rules

- **Links go to GitHub repos only.** No live/demo links on project cards.
- Project cards: title + tech stack (both left-aligned, stack under title),
  description, repo link. **No index numbers, no diagonal arrows, no metric lines.**
- Project order and set live in `data/projects.ts`: Trading, Nitro, NodeLabs,
  JobTwin, Maritime, Vehicle Invoice — 6 cards in a 2-col grid.
- Don't invent metrics, claims, or dates. Ground copy in `data/*.ts` or the repo.
- CGPA is **8.53**. Role is **Software Engineer**.
- Contact details are base64-encoded in `data/user.ts` (scrape mitigation) — use
  the existing decode helpers, don't inline plaintext.

## Contributions graph

- Served same-origin from `src/app/api/contributions/route.ts`.
- Primary: `github-contributions-api.jogruber.de` (6h cache) → fallback:
  GitHub public events API. Optional `GITHUB_TOKEN` env raises rate limits.
- Never call third-party contribution APIs directly from the client.

## Workflow rules

- **Do NOT `git push` or trigger a deploy without explicit user approval.**
  Commit locally, show the diff, wait. This overrides any ambiguous instruction
  to "ship", "deploy", "sync", or "update" — only a clear, explicit go-ahead in
  the current turn authorizes a push.
- Keep changes consistent with surrounding structure, naming, and style.
- For any UI change, verify it in a real browser (screenshot + console) before
  declaring it done — don't eyeball from source alone.
- Treat unfamiliar files or uncommitted changes as the user's work: investigate
  before overwriting or deleting.
- One focused commit per logical change; imperative subject line.

## Deploy

Vercel, project `portfolio` (`prj_T4zbXzQYPMFJzFHAnFjjsvPAwrdr`, team
`sheikh162s-projects`). Production is **public**; preview deployments are
protected by Vercel Authentication. Pushing `main` triggers a production build.

## Available MCP tools — use them, don't guess

- **context7** — look up current docs (Tailwind v4, Motion, Next 16) before
  writing code from memory. This is the main defense against stale APIs.
- **shadcn** — browse/view/install registry components instead of hand-rolling.
- **github** — read repos, issues, PRs directly (toolset-limited to
  `repos,issues,pull_requests`).
- **playwright** — drive a real browser for screenshots, console errors, layout
  checks (`localhost:3000` for dev).
- **vercel** — deploy state, logs, analytics when shipping.
