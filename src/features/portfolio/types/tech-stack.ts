import type { LucideIcon } from "lucide-react";

/**
 * A single technology in the Stack section, rendered as a linked chip.
 */
export type TechStackItem = {
  /** Display name. */
  title: string;
  /** Official website. */
  href: string;
  /**
   * simple-icons slug. The brand mark is served from
   * `https://cdn.simpleicons.org/[key]`.
   *
   * Omit when simple-icons has no mark for the technology and supply `icon`
   * instead.
   */
  key?: string;
  /**
   * The brand mark is too dark to read against the dark background, so the
   * white variant is requested in dark mode.
   */
  theme?: boolean;
  /** Monochrome glyph used when simple-icons has no mark, e.g. AWS. */
  icon?: LucideIcon;
};

/**
 * One row of the Stack table: a numbered label and the technologies under it.
 */
export type TechStackGroup = {
  /** Row label, e.g. "Backend & Database". */
  title: string;
  items: TechStackItem[];
};
