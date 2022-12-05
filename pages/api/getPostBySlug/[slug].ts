import fs from 'fs';
import matter from 'gray-matter';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getPostBySlug(req: NextApiRequest, res: NextApiResponse) {
  const file = fs.readFileSync(`posts/${req.query.slug}.md`, 'utf-8');

  const { data: frontMatter, content } = matter(file);

  return res.status(200).json({ frontMatter, content });
}
