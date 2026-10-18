import { User } from "../types/user";

export const USER = {
  firstName: "Sheikh",
  lastName: "Abdullah",
  displayName: "Sheikh Abdullah",
  username: "sheikh162",
  gender: "male",
  // Extracted from resume
  address: "Chennai, India",
  email: "c2hlaWtoYWJkdWxsYWguYWthQGdtYWlsLmNvbQ==", // Base64 for sheikhabdullah.aka@gmail.com
  phoneNumber: "KzkxIDkzNjAxNTM3MDQ=", // Base64 for +91 9360153704
  //website: "https://sheikhabdullah.com", // Placeholder if you have 
  jobTitle: "Software Engineer",
  resumeUrl:
    "https://drive.google.com/file/d/1mcz80LS0OYmFW7IpFfFXg-viXhFjwbJC/view",
  leetcodeUrl: "https://leetcode.com/u/fsUKa2l6Z2/",
  // DRAFT: first pass at the "$whoami" intro, assembled from the resume and
  // the rest of `data/*.ts`. Rewrite freely; keep claims grounded in a source.
  introBullets: [
    {
      lead: "Who I am",
      text: "a Software Engineer based in Chennai, India. I build full-stack web applications, mostly around real-time data, caching, and performance.",
    },
    {
      lead: "Recently",
      text: "a Software Engineer Intern at Fidelity Investments (May 2026 - Jul 2026). I built an idle-resource detection service across 6 AWS services and cut dashboard query latency from 85s to 25s.",
    },
    {
      lead: "Currently",
      text: "in my final year of B.Tech in Computer Science (Internet of Things) at Shiv Nadar University Chennai, with a CGPA of 8.53.",
    },
  ],
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