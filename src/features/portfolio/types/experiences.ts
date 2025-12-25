// src/features/portfolio/types/experiences.ts
export type ExperiencePositionIcon = "code" | "design" | "education" | "business" | "idea";

export type ExperiencePosition = {
  id: string;
  title: string;
  employmentPeriod: { start: string; end?: string };
  employmentType?: string;
  description?: string;
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