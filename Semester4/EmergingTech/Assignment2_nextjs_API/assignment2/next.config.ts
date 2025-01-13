import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["c1.scryfall.com", "cards.scryfall.io"], // Add external image domains here
  },
  // other config options here
};

export default nextConfig;
