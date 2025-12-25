export type Project = {
  title: string;
  description: string;
  href: string; // URL to the live site or repo
  image?: string; // Optional image URL
  tags: string[]; // List of tech stack used
  active?: boolean; // If false, maybe hide it (optional logic)
};