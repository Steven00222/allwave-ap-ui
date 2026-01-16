import { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    appDir: true, // ensures app/ folder is recognized
  },
};

export default nextConfig;
