import fs from 'fs';
import matter from 'gray-matter';
import { NextApiRequest, NextApiResponse } from 'next';

export async function getPostBySlug({ slug }: { slug: string }) {
  const file = fs.readFileSync(`posts/${slug}.md`, 'utf-8');

  const { data: frontMatter, content } = matter(file);

  return { frontMatter, content };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const jsonData = await getPostBySlug({ slug: req.query.slug as string });
  res.status(200).json(jsonData);
}
