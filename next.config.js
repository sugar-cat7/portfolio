/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    unoptimized: true,
  },
  basePath: process.env.GITHUB_ACTIONS && "/portfolio",
  trailingSlash: true,
};

module.exports = nextConfig;
