"use client"

import ProjectCard from "./ui/ProjectCard"

const projects = [
  {
    title: "Real-Time Trading Platform",
    description: "Full-stack trading platform with order matching engine, real-time updates via WebSocket, and containerized microservices architecture.",
    tags: ["Node.js", "TypeScript", "Redis", "Next.js", "Docker"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Maritime Incident Reporting System",
    description: "SOLAS/IMO-compliant reporting system with role-based access, dynamic forms, and PostgreSQL backend.",
    tags: ["Next.js 15", "Prisma", "PostgreSQL", "Clerk Auth"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Face Recognition Attendance",
    description: "Computer vision system for automated attendance using dlib embeddings with SQLite logging.",
    tags: ["Python", "OpenCV", "dlib", "Flask"],
    demoLink: "#",
    githubLink: "#"
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-4xl md:text-5xl font-bold text-[#EAEAEA] mb-12">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  )
}