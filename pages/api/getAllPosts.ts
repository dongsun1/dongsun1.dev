import fs from 'fs';
import matter from 'gray-matter';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getAllPosts(req: NextApiRequest, res: NextApiResponse) {
  const files = fs.readdirSync('posts');

  const posts = files.map((fileName) => {
    const file = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontMatter, content } = matter(file);

    return {
      frontMatter,
      slug: fileName.replace(/\.md/, ''),
      content,
    };
  });

  posts.sort(({ frontMatter: { date: a } }, { frontMatter: { date: b } }) => new Date(b).getTime() - new Date(a).getTime());

  return res.status(200).json(posts);
}
