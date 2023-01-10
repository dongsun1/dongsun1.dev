import axios from 'lib/axios';
import { GetServerSideProps } from 'next';
import { IPost } from 'interfaces/post.interface';

const createSitemap = (slugs: string[]) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${slugs
          .map((slug) => {
            return `
                <url>
                    <loc>${`https://dongsun1.dev/${slug}`}</loc>
                </url>
            `;
          })
          .join('')}
    </urlset>
`;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const { data: { posts = [] } = {} } = await axios.get<{ posts: IPost[] }>('/api/getPosts');

  const allPages = [...posts.map(({ _id }) => _id), ...['', 'resume', 'categories']];

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600');
  res.write(createSitemap(allPages));
  res.end();

  return {
    props: {},
  };
};

export default function Site() {
  return null;
}
