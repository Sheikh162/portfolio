import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true, // Needed for SVG icons
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org", 
      },
      {
        protocol: "https",
        hostname: "github.com", 
      },
    ],
  },
};

export default nextConfig;