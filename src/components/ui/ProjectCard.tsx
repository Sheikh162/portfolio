import { Github, ArrowUpRight } from 'lucide-react';

// This is a UI component, so it lives in the /ui directory.
// It's a Server Component as it has no client-side interactivity.
interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  demoLink,
  githubLink,
}: ProjectCardProps) {
  return (
    <div
      className="group relative flex h-full transform flex-col justify-between rounded-lg border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-purple-400/50 hover:bg-white/10"
    >
      {/* Glowing effect on hover, a key part of the desired aesthetic */}
      <div className="absolute inset-0 z-0 rounded-lg bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <div className="relative z-10">
        <h3 className="mb-3 text-xl font-semibold text-gray-100">{title}</h3>
        <p className="mb-4 text-gray-400">{description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-auto flex items-center gap-4 pt-4">
        {demoLink && demoLink !== '#' && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 transition-colors hover:text-purple-400"
            aria-label={`Live demo for ${title}`}
          >
            <ArrowUpRight size={18} />
            <span>Live Demo</span>
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 transition-colors hover:text-purple-400"
            aria-label={`GitHub repository for ${title}`}
          >
            <Github size={18} />
            <span>Source</span>
          </a>
        )}
      </div>
    </div>
  );
}
