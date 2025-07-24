"use client"

import { ExternalLink, Github } from 'lucide-react'

interface Project {
  title: string;
  description: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group border border-white/10 rounded-lg p-6 hover:border-[#8A63D2]/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(138,99,210,0.1)]">
      <h3 className="text-xl font-semibold text-[#EAEAEA] mb-3">
        {project.title}
      </h3>
      <p className="text-[#EAEAEA]/70 mb-4 leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-[#EAEAEA]/80">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex space-x-4">
        <a href={project.demoLink} className="flex items-center space-x-2 text-[#8A63D2] hover:text-[#8A63D2]/80 transition-colors">
          <ExternalLink size={16} />
          <span className="text-sm">Live Demo</span>
        </a>
        <a href={project.githubLink} className="flex items-center space-x-2 text-[#8A63D2] hover:text-[#8A63D2]/80 transition-colors">
          <Github size={16} />
          <span className="text-sm">GitHub</span>
        </a>
      </div>
    </div>
  )
}