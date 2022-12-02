/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://dongsun1.github.io',
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
