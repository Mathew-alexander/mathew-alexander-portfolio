import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // For GitHub Pages project sites, set the repository name as basePath
  // and assetPrefix before deployment. See README.md.
};

export default nextConfig;
