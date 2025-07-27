import ProjectCard from './ui/ProjectCard';
import { projects } from '@/lib/data';

// This is a Server Component. It fetches data from our centralized data file.
export default function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold tracking-tighter text-white md:text-5xl">
          Proof of Work
        </h2>
{/*         <p className="mt-3 text-lg text-gray-400">
          A selection of my work, demonstrating my skills in building complex systems.
        </p> */}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
