export type Project = {
  title: string;
  description: string;
  /** Canonical link: the GitHub repo (source of truth, never 404s) */
  href: string;
  /** One quantified proof line, e.g. "Matching engine · 37 commits" */
  metric?: string;
  image?: string; // Optional image URL
  tags: string[]; // List of tech stack used
  active?: boolean; // If false, maybe hide it (optional logic)
};