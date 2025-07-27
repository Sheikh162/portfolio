import HeroSection from '@/components/HeroSection'
import ProjectsSection from '@/components/ProjectsSection'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import ContactSection from '@/components/ContactSection'
import EducationSection from '@/components/EducationSection'

// The main page, composing all sections.
export default function Home() {
  return (
    <>
      <HeroSection />
{/*       <AboutSection /> */}
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </>
  )
}
