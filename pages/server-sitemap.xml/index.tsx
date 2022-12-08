import { GetServerSideProps } from 'next';
import { getServerSideSitemap } from 'next-sitemap';
import { getAllPosts } from '../api/getAllPosts';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const posts = await getAllPosts();
  const newsSitemaps = posts.map(({ slug }) => ({
    loc: `${'https://dongsun1-dev.vercel.app/postPage/'}${slug}`,
    lastmod: new Date().toISOString(),
  }));

  const fields = [...newsSitemaps];

  return getServerSideSitemap(ctx, fields);
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function Site() {}
