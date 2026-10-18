import type { Experience } from "../types/experiences";

/** Work history, rendered in the "Experience" panel */
export const EXPERIENCES: Experience[] = [
  {
    id: "fidelity-internship",
    companyName: "Fidelity Investments",
    companyLogo: "https://www.google.com/s2/favicons?domain=fidelity.com&sz=128",
    url: "https://www.fidelity.com",
    positions: [
      {
        id: "swe-intern",
        title: "Software Engineer Intern",
        employmentPeriod: {
          start: "May 2026",
          end: "Jul 2026",
        },
        employmentType: "Internship",
        location: "Chennai, India",
        icon: "code",
        highlights: [
          {
            lead: "Cost Optimization Engine",
            text: "Built an idle-resource detection service across 6 AWS services (RDS, DynamoDB, EC2, SQS, ElastiCache, EBS) spanning multi-account environments, unlocking decommissioning worth $1000s in recurring cloud savings.",
          },
          {
            lead: "Batch Caching & Latency Optimization",
            text: "Cut dashboard query latency from 85s to 25s (70% reduction) across 100+ resources per App ID via a composite {Account ID, Region, Env} HashMap cache, eliminating redundant cross-account AWS client instantiations.",
          },
          {
            lead: "Automated Audit Pipeline",
            text: "Built a monthly Micronaut Cron Scheduler traversing a 4-tier org hierarchy (Business Unit → Product Line → Product ID → App ID) to run idle-detection, persist scanned resource metrics to RDS PostgreSQL for historical tracking, and auto-dispatch Excel summary reports to application managers.",
          },
          {
            lead: "False-Positive Prevention Layer",
            text: "Laid the foundation for a heuristic classification layer using AWS CloudTrail logs and non-strict thresholds to reduce false-positive idle flags and prevent accidental deletion of production infrastructure.",
          },
        ],
        skills: ["AWS", "Micronaut", "RDS PostgreSQL", "CloudTrail"],
        isExpanded: true,
      },
    ],
  },
];

/** Academic history, rendered in the "Education" panel */
export const EDUCATION: Experience[] = [
  {
    id: "education-1",
    companyName: "Shiv Nadar University Chennai",
    companyLogo: "https://pbs.twimg.com/profile_images/1374616380020903937/Y5Ylxl22_400x400.jpg",
    url: "https://www.snuchennai.edu.in/",
    positions: [
      {
        id: "btech-cse",
        title: "B.Tech in Computer Science (Internet of Things)",
        employmentPeriod: {
          start: "Aug 2023",
          end: "Jul 2027",
        },
        icon: "education",
        highlights: [
          { lead: "CGPA", text: "8.53" },
          {
            text: "Focus: Web Development, Internet of Things (IoT), and Data Structures.",
          },
        ],
        skills: ["C", "C++", "Python", "IoT"],
        isExpanded: true,
      },
    ],
  },
];