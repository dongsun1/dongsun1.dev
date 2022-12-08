/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://dongsun1-dev.vercel.app/',
  changefreq: 'daily',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
