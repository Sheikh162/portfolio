import { SectionSeparator } from "@/components/ui/section-separator";
import { Overview } from "@/features/portfolio/components/overview";


// Keeping your existing content sections
import { TechStack } from "@/features/portfolio/components/tech-stack";
import { ProfileHeader } from "@/features/portfolio/components/profile-header";
import { SocialLinks } from "@/features/portfolio/components/social-links";
import { Projects } from "@/features/portfolio/components/projects";
import { Education, Experiences } from "@/features/portfolio/components/experiences";
import { GitHubContributions } from "@/features/portfolio/components/github-contributions";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-3xl border-x border-edge bg-background">
      <ProfileHeader />
      <SectionSeparator />

      <Overview />
      <SectionSeparator />

      <SocialLinks />
      <SectionSeparator />

      <GitHubContributions />
      <SectionSeparator />

      <TechStack />
      <SectionSeparator />

      <Experiences />
      <SectionSeparator />

      <Projects />
      <SectionSeparator />

      <Education />
      <SectionSeparator />

    </div>
  );
}