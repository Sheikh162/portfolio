import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
    {
    title: "Automated Vehicle Invoice Analysis Platform",
    description:
      "AI-powered cost control system for automotive service providers. Features Long-Context LLM integration, multi-format document ingestion, and serverless real-time validation.",
    href: "https://github.com/Sheikh162/vehicle-invoice",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Clerk", "Zod", "Gemini API"],
    image: "/project-img/vehicle-invoice.png", 
  },
  {
    title: "Real-Time Trading Platform",
    description:
      "A full-stack trading platform with high-performance order matching engine, live market data via WebSockets, and Redis Pub/Sub.",
    href: "https://github.com/Sheikh162/Trading-Platform", 
    tags: ["Next.js", "Node.js", "Redis", "Docker", "TimescaleDB"],
    image: "/project-img/trading-platform.png", 
  },
  {
    title: "Maritime Casualty Reporting System",
    description:
      "IMO-compliant reporting system for DG Shipping India. Features RBAC, complex form validation, and automated CI/CD.",
    href: "https://github.com/Sheikh162/marine-report",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Clerk", "Zod"],
    image: "/project-img/marine-report.png", 
  },
];