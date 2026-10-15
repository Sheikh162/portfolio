import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    title: "Trading Exchange",
    description:
      "A full-stack trading platform with high-performance order matching engine, live market data via WebSockets, and Redis Pub/Sub.",
    href: "https://github.com/Sheikh162/Trading-Platform",
    tags: ["Next.js", "Node.js", "Redis", "Docker", "TimescaleDB"],
    image: "/project-img/trading-platform.png",
  },
  {
    title: "Nitro",
    description:
      "Kernel-level battery saver and TUI dashboard for Linux gaming laptops. Split-process Rust system that bypasses BIOS power limits to enforce strict TDP constraints via ryzenadj.",
    href: "https://github.com/Sheikh162/Nitro",
    tags: ["Rust", "Linux", "TUI"],
  },
  {
    title: "NodeLabs",
    description:
      "Web-based VM sandbox: spin up and control QEMU virtual machines from the browser, with instant qcow2 overlays and in-browser console via Apache Guacamole.",
    href: "https://github.com/Sheikh162/network-lab",
    tags: ["TypeScript", "QEMU", "Guacamole", "Shell"],
  },
  {
    title: "JobTwin",
    description:
      "Agentic AI digital twin for the job hunt: watches career pages, fills application forms, and drafts outreach. Agent-first product design.",
    href: "https://github.com/Sheikh162/jobtwin",
    tags: ["TypeScript", "Next.js", "AI Agents"],
  },
  {
    title: "Maritime Casualty Reporting System",
    description:
      "IMO-compliant reporting system for DG Shipping India. Features RBAC, complex form validation, and automated CI/CD.",
    href: "https://github.com/Sheikh162/marine-report",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Clerk", "Zod"],
    image: "/project-img/marine-report.png",
  },
  {
    title: "Vehicle Invoice Analyzer",
    description:
      "AI-powered cost control system for automotive service providers. Features Long-Context LLM integration, multi-format document ingestion, and serverless real-time validation.",
    href: "https://github.com/Sheikh162/vehicle-invoice",
    tags: ["Next.js", "PostgreSQL", "Prisma", "Clerk", "Zod", "Gemini API"],
    image: "/project-img/vehicle-invoice.png",
  },
];