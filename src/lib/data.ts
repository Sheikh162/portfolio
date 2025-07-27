import { Briefcase, Code, Database, Globe, BrainCircuit, PenTool, GraduationCap } from 'lucide-react';

// Centralizing all static data for easy management.

export const education = {
    university: "Shiv Nadar University Chennai",
    degree: "B.Tech in Computer Science (Internet of Things)",
    duration: "2023 – 2027",
    cgpa: "8.6 CGPA",
    courses: [
        "Data Structures & Algorithms", "Object-Oriented Programming",
        "Operating Systems", "Computer Networks", "Database Systems",
        "Software Engineering", "Web Development", "Large Language Models (NPTEL)"
    ]
};

export const projects = [
  {
    title: 'Real-Time Trading Platform',
    description:
      'Designed a scalable, microservices-based trading platform with a high-performance order matching engine and real-time data streaming via WebSockets.',
    tags: ['Node.js', 'TypeScript', 'Redis', 'Next.js', 'Docker', 'TimescaleDB'],
    githubLink: 'https://github.com/Sheikh162/Trading-Platform/',
  },
  {
    title: 'Maritime Incident Reporting System',
    description:
      'Built a SOLAS/IMO-compliant reporting system for DG Shipping, India, featuring role-based access, dynamic forms, and a normalized PostgreSQL schema.',
    tags: ['Next.js 15', 'Prisma', 'PostgreSQL', 'Clerk Auth', 'Zod'],
    demoLink: 'https://marine-report.vercel.app/',
    githubLink: 'https://github.com/Sheikh162/marine-report',
  },
  {
    title: 'Face Recognition Attendance',
    description:
      'Engineered a computer vision system for automated attendance using dlib embeddings, featuring a Tkinter GUI and a Flask-based web interface for visualization.',
    tags: ['Python', 'OpenCV', 'dlib', 'Flask', 'SQLite'],
    githubLink: 'https://github.com/Sheikh162/Attendance-System',
  },
];

export const skills = [
    { category: "Languages", icon: Code, items: ["TypeScript", "Python", "C/C++", "SQL"] },
    { category: "Frontend", icon: Globe, items: ["React", "Next.js", "Tailwind CSS", "Recoil"] },
    { category: "Backend", icon: Briefcase, items: ["Node.js", "Express", "REST APIs", "WebSocket"] },
    { category: "Databases", icon: Database, items: ["PostgreSQL", "Prisma", "Redis", "MongoDB"] },
    { category: "DevOps & Tools", icon: BrainCircuit, items: ["Docker", "Git", "Linux CLI", "Turborepo"] },
    { category: "Computer Vision", icon: PenTool, items: ["OpenCV", "dlib", "NumPy", "Pandas"] }
];
