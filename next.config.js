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
      source: '/*',
      destination: 'https://dongsun1.dev/',
      permanent: true,
    },
  ],
};

module.exports = nextConfig;
