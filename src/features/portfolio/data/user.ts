import { User } from "../types/user";

export const USER = {
  firstName: "Sheikh",
  lastName: "Abdullah",
  displayName: "Sheikh Abdullah",
  username: "sheikh162",
  gender: "male",
  bio: "Full-Stack Dev. I break things, learn fast, and make stuff happen.",
  flipSentences: [
    "Full-Stack Developer",
    "Building Scalable Systems",
  ],
  // Extracted from resume
  address: "Chennai, India",
  email: "c2hlaWtoYWJkdWxsYWguYWthQGdtYWlsLmNvbQ==", // Base64 for sheikhabdullah.aka@gmail.com
  phoneNumber: "OTM2MDE1MzcwNA==", // Base64 for +91 9360153704
  //website: "https://sheikhabdullah.com", // Placeholder if you have 
  jobTitle: "Full-Stack Developer",
  
  // Mapped from "Education" and "Projects" since you are a student/freelancer
  jobs: [
    {
      title: "Full-Stack Developer",
      //company: "Personal Project",
      website: "https://github.com/sheikh162", // Link to your github
    },
    // {
    //   title: "Maritime Casualty Reporting System",
    //   company: "DG Shipping, India",
    //   website: "#", // Add link if public
    // }
  ],
  about: `
- **Full-Stack Developer** pursuing B.Tech in Computer Science (IoT) at **Shiv Nadar University Chennai** (CGPA: 8.647).
- Specialized in building **scalable, real-time applications** using **Next.js**, **Node.js**, and **Redis**.
- Experienced in **system architecture**, designing high-performance order matching engines and SOLAS/IMO-compliant reporting systems.
- Proficient in **containerization (Docker)**, **CI/CD pipelines**, and database optimization with **PostgreSQL** and **TimescaleDB**.
- Passionate about solving complex problems, from real-time financial data streaming to secure enterprise-grade form management.
  `,
  avatar: "https://github.com/sheikh162.png", 
  ogImage: "sample.jpeg",
  namePronunciationUrl: "", 
  timeZone: "Asia/Kolkata",
  keywords: [
    "sheikh abdullah",
    "full stack developer",
    "next.js",
    "node.js",
    "chennai",
    "iot",
    "real-time systems"
  ],
  dateCreated: "2023-08-01", 
} satisfies User;