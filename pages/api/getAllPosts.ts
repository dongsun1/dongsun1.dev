import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { NextApiRequest, NextApiResponse } from 'next';
import { IPost } from '../../interfaces/post.interface';

const recursiveGetPosts = (filePath: string) => {
  const postsDirectory = path.join(process.cwd(), 'public');
  const files = fs.readdirSync(postsDirectory + filePath);

  const posts = files.reduce<IPost[]>((acc, fileName) => {
    if (!fileName.includes('.md')) {
      const a = [...recursiveGetPosts(`${filePath}/${fileName}`)];
      acc.push(...a);
    } else {
      const file = fs.readFileSync(`${postsDirectory}/${filePath}/${fileName}`, 'utf-8');
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

export async function getAllPosts() {
  const posts = recursiveGetPosts('/posts');

  // const posts = files.map((fileName) => {
  //   const file = fs.readFileSync(`${postsDirectory}/posts/${fileName}`, 'utf-8');
  //   const { data: frontMatter, content } = matter(file);

  //   return {
  //     frontMatter,
  //     slug: fileName.replace(/\.md/, ''),
  //     content,
  //   };
  // });

  posts.sort(({ frontMatter: { date: a } }, { frontMatter: { date: b } }) => new Date(b).getTime() - new Date(a).getTime());

  return posts;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const jsonData = await getAllPosts();
  res.status(200).json(jsonData);
}
