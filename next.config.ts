import type { NextConfig } from "next";

const yearContent = ["./Year1", "./Year2", "./Year3", "./Year4"] as const;

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: process.cwd(),
  // Server routes only read markdown. Images/PDFs are copied into public/ and
  // served as static files, so they must not land in Function bundles.
  outputFileTracingIncludes: {
    "/*": yearContent.map((dir) => `${dir}/**/*.md`),
  },
  outputFileTracingExcludes: {
    "/*": [
      "**/assets/**",
      "**/*.png",
      "**/*.jpg",
      "**/*.jpeg",
      "**/*.gif",
      "**/*.webp",
      "**/*.avif",
      "**/*.svg",
      "**/*.ico",
      "**/*.bmp",
      "**/*.tif",
      "**/*.tiff",
      "**/*.pdf",
      "**/*.mp4",
      "**/*.webm",
      "**/*.mov",
      "**/*.zip",
    ],
  },
  agentRules: false,
};

export default nextConfig;
