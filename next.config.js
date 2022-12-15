/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
  },
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextConfig
