import { NextApiRequest, NextApiResponse } from 'next';
import { getAllPosts } from '../getAllPosts';

export async function getPostBySlug({ slug }: { slug: string }) {
  const posts = await getAllPosts();

  const post = posts.find(({ slug: _slug }) => _slug === slug);
  if (post) {
    return post;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const jsonData = await getPostBySlug({ slug: req.query.slug as string });
  res.status(200).json(jsonData);
}
