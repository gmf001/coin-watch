/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: ['assets.coingecko.com', 'coin-images.coingecko.com']
  }
};

module.exports = nextConfig;
