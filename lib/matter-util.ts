import fs from 'fs';
import matter from 'gray-matter';
import { IFrontMatter } from '../interfaces/post.interface';

export const getAllPosts = async () => {
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

  return posts;
};

export const getPostBySlug = async (slug: string) => {
  const file = fs.readFileSync(`posts/${slug}.md`, 'utf-8');

  const { data: frontMatter, content } = matter(file);
  console.info('{ frontMatter, content }', { frontMatter, content });

  return { frontMatter, content };
};
