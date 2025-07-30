// src/components/ProjectsSection.tsx
import ProjectCard from './ProjectCard';
import { projects } from '@/lib/data';

export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto w-full max-w-7xl py-12 md:py-16">
      <h2 className="mb-8 font-mono text-sm uppercase tracking-wider text-muted-foreground">
        Proof of Work
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
