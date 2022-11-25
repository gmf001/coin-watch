/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    runtime: 'experimental-edge'
  },
  images: {
    domains: ['assets.coingecko.com']
  }
};

module.exports = nextConfig;
