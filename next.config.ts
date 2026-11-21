// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   output: "export",
//   images: { unoptimized: true },
//   // For GitHub Pages project sites, set the repository name as basePath
//   // and assetPrefix before deployment. See README.md.
// };

// export default nextConfig;

import type { NextConfig } from "next";

const repo = "mathew-alexander-portfolio";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    unoptimized: true,
  },

  basePath:
    process.env.NODE_ENV === "production"
      ? `/${repo}`
      : "",
};

export default nextConfig;