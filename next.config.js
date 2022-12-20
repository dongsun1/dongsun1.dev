/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) config.resolve.fallback.fs = false;
    return config;
  },
  reactStrictMode: false,
  swcMinify: true,
  // siteUrl: 'https://dongsun1-dev.vercel.app/',
  // exclude: ['/404'],
  // generateRobotsTxt: true,
  // robotsTxtOptions: {
  //   policies: [
  //     {
  //       userAgent: '*',
  //       disallow: ['/404'],
  //     },
  //     { userAgent: '*', allow: '/' },
  //   ],
  //   additionalSitemaps: [`${'https://dongsun1-dev.vercel.app/'}server-sitemap.xml`],
  // },
};

module.exports = nextConfig;
