import type { TechStack } from "../types/tech-stack";

export const TECH_STACK: TechStack[] = [
  // --- Languages ---
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    categories: ["Language"],
  },
  {
    key: "javascript",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Language"],
  },
  {
    key: "python",
    title: "Python",
    href: "https://www.python.org/",
    categories: ["Language"],
  },
  {
    key: "c",
    title: "C",
    href: "https://en.wikipedia.org/wiki/C_(programming_language)",
    categories: ["Language"],
  },
  {
    // FIX: Slug changed from 'cpp' to 'cplusplus'
    key: "cplusplus", 
    title: "C++",
    href: "https://isocpp.org/",
    categories: ["Language"],
  },
  {
    // FIX: 'java' icon was removed due to trademark; 'openjdk' is the standard replacement
    key: "openjdk", 
    title: "Java",
    href: "https://www.java.com/",
    categories: ["Language"],
    theme: true
  },
  // NOTE: Generic 'sql' icon doesn't exist. 
  // You could use 'sqlite', 'mysql', or remove this and keep only PostgreSQL.
  {
    key: "sqlite",
    title: "SQL",
    href: "https://en.wikipedia.org/wiki/SQL",
    categories: ["Language"],
  },

  // --- Frontend ---
  {
    key: "react",
    title: "React",
    href: "https://react.dev/",
    categories: ["Frontend", "Library"],
  },
  {
    // FIX: Slug changed from 'nextjs' to 'nextdotjs'
    key: "nextdotjs", 
    title: "Next.js",
    href: "https://nextjs.org/",
    categories: ["Frontend", "Framework"],
    theme: true, 
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    categories: ["Frontend", "CSS"],
  },
  // NOTE: 'recoil' does not have a Simple Icon yet. 
  // You might want to remove this or use a generic React icon.
  // {
  //   key: "recoil",
  //   title: "Recoil",
  //   href: "https://recoiljs.org/",
  //   categories: ["Frontend", "State Management"],
  // },
  {
    key: "html5",
    title: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    categories: ["Frontend"],
  },
{
    // CHANGE THIS:
    // key: "css3", 
    // TO THIS:
    key: "css", 
    title: "CSS3",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    categories: ["Frontend"],
  },

  // --- Backend ---
  {
    // FIX: Slug changed from 'nodejs' to 'nodedotjs'
    key: "nodedotjs", 
    title: "Node.js",
    href: "https://nodejs.org/",
    categories: ["Backend", "Runtime"],
  },
  {
    key: "express",
    title: "Express",
    href: "https://expressjs.com/",
    categories: ["Backend", "Framework"],
    theme: true
  },
  {
    key: "zod",
    title: "Zod",
    href: "https://zod.dev/",
    categories: ["Backend", "Validation"],
  },
  {
    // FIX: Replaced generic 'websockets' (no icon) with 'socketdotio' which is common
    key: "socketdotio", 
    title: "WebSockets",
    href: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
    categories: ["Backend", "Protocol"],
    theme: true
  },

  // --- Databases ---
  {
    key: "postgresql",
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
    categories: ["Database"],
  },
  {
    key: "prisma",
    title: "Prisma",
    href: "https://www.prisma.io/",
    categories: ["Database", "ORM"],
    theme: true,
  },
  {
    key: "redis",
    title: "Redis",
    href: "https://redis.io/",
    categories: ["Database", "Cache"],
  },
  {
    key: "mongodb",
    title: "MongoDB",
    href: "https://www.mongodb.com/",
    categories: ["Database"],
  },

  // --- DevOps & Tools ---
  {
    key: "docker",
    title: "Docker",
    href: "https://www.docker.com/",
    categories: ["DevOps"],
  },
  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com/",
    categories: ["Tools"],
  },
  {
    key: "linux",
    title: "Linux",
    href: "https://www.linux.org/",
    categories: ["Tools", "OS"],
  },
  {
    key: "postman",
    title: "Postman",
    href: "https://www.postman.com/",
    categories: ["Tools", "Testing"],
  },
  
  {
    key: "clerk",
    title: "Clerk",
    href: "https://clerk.com/",
    categories: ["Auth"],
  },
];