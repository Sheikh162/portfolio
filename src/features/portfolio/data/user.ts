import { User } from "../types/user";

export const USER: User = {
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
  // The "$whoami" intro, in Sheikh's own words.
  introBullets: [
    {
      text: "I'm Sheikh, a software engineer who's curious about how tech works under the hood and trying out niche tools.",
    },
    {
      text: "From flashing custom ROMs back in '22 to running Linux as my daily driver, I've always loved messing around with things to see how they work.",
    },
    {
      text: "I enjoy breaking things apart and building them back better, tweaking and building unique setups.",
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
};