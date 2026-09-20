// src/features/portfolio/types/experiences.ts
export type ExperiencePositionIcon = "code" | "design" | "education" | "business" | "idea";

/** Structured bullet point with an optional bold lead-in (resume style) */
export type ExperienceHighlight = {
  lead?: string;
  text: string;
};

export type ExperiencePosition = {
  id: string;
  title: string;
  employmentPeriod: { start: string; end?: string };
  employmentType?: string;
  location?: string;
  /** Structured bullet points rendered as a list */
  highlights?: ExperienceHighlight[];
  icon?: ExperiencePositionIcon;
  skills?: string[];
  isExpanded?: boolean;
};

export type Experience = {
  id: string;
  companyName: string;
  companyLogo?: string;
  url?: string;
  positions: ExperiencePosition[];
  isCurrentEmployer?: boolean;
};