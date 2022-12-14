import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { NextApiRequest, NextApiResponse } from 'next';
import { IPost } from '../../../interfaces/post.interface';

const recursiveGetPost = ({ filePath, slug }: { filePath: string; slug: string }) => {
  const files = fs.readdirSync(filePath);

  const posts = files.reduce<IPost[]>((acc, fileName) => {
    if (!fileName.includes('.md')) {
      acc.push(...recursiveGetPost({ filePath: `${filePath}/${fileName}`, slug }));
    } else if (fileName.replace('.md', '') === slug) {
      const file = fs.readFileSync(`${filePath}/${fileName}`, 'utf-8');
      const { data: frontMatter, content } = matter(file);

      acc.push({
        frontMatter,
        slug: fileName.replace(/\.md/, ''),
        content,
      });
    }
    return acc;
  }, []);

  return posts;
};

export async function getPostBySlug({ slug }: { slug: string }) {
  const postsDirectory = path.join(process.cwd(), 'public');
  const [post] = recursiveGetPost({ filePath: `${postsDirectory}/posts`, slug });

  if (post) {
    return post;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const jsonData = await getPostBySlug({ slug: req.query.slug as string });
  res.status(200).json(jsonData);
}
