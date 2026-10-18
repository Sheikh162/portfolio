import { SectionSeparator } from "@/components/ui/section-separator";

// Keeping your existing content sections
import { TechStack } from "@/features/portfolio/components/tech-stack";
import { ProfileHeader } from "@/features/portfolio/components/profile-header";
import { Socials } from "@/features/portfolio/components/socials";
import { WhoAmI } from "@/features/portfolio/components/whoami";
import { Projects } from "@/features/portfolio/components/projects";
import { Education, Experiences } from "@/features/portfolio/components/experiences";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-3xl border-x border-edge bg-background">
      <ProfileHeader />
      <SectionSeparator />

      <WhoAmI />
      <Socials />

      <SectionSeparator />

      <TechStack />
      <SectionSeparator />

      <Experiences />
      <SectionSeparator />

      <Projects />
      <SectionSeparator />

      <Education />
    </div>
  );
}
