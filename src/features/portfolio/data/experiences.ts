import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "education-1",
    companyName: "Shiv Nadar University Chennai",
    companyLogo: "https://pbs.twimg.com/profile_images/1374616380020903937/Y5Ylxl22_400x400.jpg", // Placeholder icon for University
    url: "https://www.snuchennai.edu.in/",
    positions: [
      {
        id: "btech-cse",
        title: "B.Tech in Computer Science (Internet of Things)",
        employmentPeriod: {
          start: "Aug 2023",
          end: "July 2027",
        },
        employmentType: "Full-time",
        icon: "education",
        description: `
- **CGPA:** 8.647
- **Focus:** Web Development, Internet of Things (IoT), and Data Structures.
        `,
        skills: ["C", "C++", "Python", "IoT"],
        isExpanded: true, // Open by default
      },
    ],
  },
  {
    id: "work-1",
    companyName: "Freelance / Personal Projects",
    companyLogo: "https://cdn.simpleicons.org/github/white", // Ensure you have this or use a CDN link
    url: "https://github.com/sheikh162",
    isCurrentEmployer: true,
    positions: [
      {
        id: "full-stack-dev",
        title: "Full-Stack Developer",
        employmentPeriod: {
          start: "May 2025",
        },
        employmentType: "Self-employed",
        icon: "code",
        description: `
Developing high-performance web applications and real-time systems.
- **Automated Vehicle Invoice Analysis Platform:** Architected a serverless Next.js SaaS for real-time invoice auditing, using Gemini 2.5 Flash for context-aware processing and automated warranty cross-referencing.
- **Real-Time Trading Platform:** Engineered a matching engine with WebSockets and Redis Pub/Sub.
- **Maritime Casualty Reporting System:** Built a SOLAS-compliant reporting platform with RBAC and complex form validation.
        `,
        skills: ["Next.js", "Node.js", "Redis", "Docker", "PostgreSQL"],
      },
    ],
  },
];