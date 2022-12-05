import Category from '../components/category';
import SideBar from '../components/sidebar';
import Title from '../components/title';
import { IPost } from '../interfaces/post.interface';
import { GetServerSideProps } from 'next';
import { useState } from 'react';

interface IPosts {
  title: string;
  date: string;
  category: string;
  desc: string;
  slug: string;
}
interface ICategories {
  [key: string]: IPosts[];
}

export default function Categories({ posts }: { posts: IPost[] }) {
  const [changedPosts, setPosts] = useState(posts);

  const getPosts = ({ category }: { category: string }) => {
    if (category === 'All') setPosts(posts);
    else {
      const filteredPosts = posts.filter(({ frontMatter: { category: catg } }) => catg === category);
      setPosts(filteredPosts);
    }
  };

  const categories = changedPosts.reduce<ICategories>((acc, { frontMatter: { title, date, category, desc }, slug }) => {
    if (!acc[category]) acc[category] = [];
    acc[category].push({ title, date, category, desc, slug });
    return acc;
  }, {});

  return (
    <div className="container mx-auto">
      <Title title="Categories" />
      <div className="flex px-32">
        <div className="flex flex-col w-5/6">
          {Object.entries(categories).map(([category, posts], index) => {
            return <Category key={index} category={category} posts={posts} />;
          })}
        </div>
        <SideBar posts={posts} getPosts={getPosts} />
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://dongsun1.github.io/api/getPost');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};
