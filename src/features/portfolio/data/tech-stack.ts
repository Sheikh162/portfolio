import { Cloud } from "lucide-react";
import type { TechStackGroup } from "../types/tech-stack";

/**
 * Stack rows, in the order they are displayed.
 *
 * Sourced from the resume's Technical Skills list (Languages, Backend & Cloud,
 * Databases & ORM) plus what this site and its projects actually use: React,
 * Next.js, Tailwind CSS, shadcn/ui, Radix UI, Zod, Prisma, QEMU, Vercel.
 *
 * `theme: true` marks a brand mark that is near-black (or too dark to read) on
 * the dark background; those are requested from simple-icons in white there.
 */
export const TECH_STACK: TechStackGroup[] = [
  {
    title: "Language",
    items: [
      {
        key: "typescript",
        title: "TypeScript",
        href: "https://www.typescriptlang.org/",
      },
      {
        key: "javascript",
        title: "JavaScript",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      { key: "python", title: "Python", href: "https://www.python.org/" },
      {
        // 'java' was removed from simple-icons over trademarks; 'openjdk' is
        // the standard replacement.
        key: "openjdk",
        title: "Java",
        href: "https://www.java.com/",
        theme: true,
      },
      {
        key: "c",
        title: "C",
        href: "https://en.wikipedia.org/wiki/C_(programming_language)",
      },
      { key: "cplusplus", title: "C++", href: "https://isocpp.org/" },
      {
        // No generic 'sql' mark exists; the SQLite one is the closest.
        key: "sqlite",
        title: "SQL",
        href: "https://en.wikipedia.org/wiki/SQL",
        theme: true,
      },
    ],
  },
  {
    title: "Frontend",
    items: [
      { key: "react", title: "React", href: "https://react.dev/" },
      {
        key: "nextdotjs",
        title: "Next.js",
        href: "https://nextjs.org/",
        theme: true,
      },
      {
        key: "tailwindcss",
        title: "Tailwind CSS",
        href: "https://tailwindcss.com/",
      },
      {
        key: "shadcnui",
        title: "shadcn/ui",
        href: "https://ui.shadcn.com/",
        theme: true,
      },
      {
        key: "radixui",
        title: "Radix UI",
        href: "https://www.radix-ui.com/",
        theme: true,
      },
      {
        key: "html5",
        title: "HTML5",
        href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        key: "css",
        title: "CSS3",
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
    ],
  },
  {
    title: "Backend",
    items: [
      { key: "nodedotjs", title: "Node.js", href: "https://nodejs.org/" },
      {
        key: "express",
        title: "Express",
        href: "https://expressjs.com/",
        theme: true,
      },
      {
        // No 'websockets' mark; Socket.IO is the transport used here.
        key: "socketdotio",
        title: "WebSockets",
        href: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
        theme: true,
      },
      { key: "zod", title: "Zod", href: "https://zod.dev/" },
      { key: "clerk", title: "Clerk", href: "https://clerk.com/" },
    ],
  },
  {
    title: "Database",
    items: [
      {
        key: "postgresql",
        title: "PostgreSQL",
        href: "https://www.postgresql.org/",
      },
      {
        // simple-icons has the Timescale mark under 'timescale'.
        key: "timescale",
        title: "TimescaleDB",
        href: "https://www.timescale.com/",
      },
      { key: "mongodb", title: "MongoDB", href: "https://www.mongodb.com/" },
      { key: "redis", title: "Redis", href: "https://redis.io/" },
      {
        key: "prisma",
        title: "Prisma",
        href: "https://www.prisma.io/",
        theme: true,
      },
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      {
        // Amazon marks were withdrawn from simple-icons, so this uses a
        // monochrome glyph instead of a brand mark.
        title: "AWS",
        href: "https://aws.amazon.com/",
        icon: Cloud,
      },
      { key: "docker", title: "Docker", href: "https://www.docker.com/" },
      { key: "linux", title: "Linux", href: "https://www.linux.org/" },
      { key: "nginx", title: "Nginx", href: "https://nginx.org/" },
      { key: "qemu", title: "QEMU", href: "https://www.qemu.org/" },
      {
        key: "vercel",
        title: "Vercel",
        href: "https://vercel.com/",
        theme: true,
      },
    ],
  },
  {
    title: "Tooling",
    items: [
      { key: "git", title: "Git", href: "https://git-scm.com/" },
      {
        key: "github",
        title: "GitHub",
        href: "https://github.com/",
        theme: true,
      },
      { key: "postman", title: "Postman", href: "https://www.postman.com/" },
    ],
  },
];
