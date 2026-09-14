import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: process.cwd(),
  outputFileTracingIncludes: {
    "/*": ["./Year1/**/*", "./Year2/**/*", "./Year3/**/*", "./Year4/**/*"],
  },
  agentRules: false,
};

export default nextConfig;
