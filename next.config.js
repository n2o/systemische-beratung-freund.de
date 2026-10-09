/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
    optimizePackageImports: ["radix-ui"],
  },
}

module.exports = nextConfig
