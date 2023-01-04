/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) config.resolve.fallback.fs = false;
    return config;
  },
  reactStrictMode: false,
  swcMinify: true,
  redirects: () => [
    {
      source: 'https://dongsun1-dev.vercel.app/',
      destination: 'https://dongsun1.dev/',
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
