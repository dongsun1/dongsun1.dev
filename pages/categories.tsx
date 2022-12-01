import Category from '../components/category';
import SideBar from '../components/sidebar';
import { IPost, ICategory } from '../interfaces/post.interface';
import { GetStaticProps } from 'next';
import { getAllPosts } from '../lib/matter-util';

interface IPosts {
  title: string;
  date: string;
  category: string;
  desc: string;
}
interface ICategories {
  [key: string]: IPosts[];
}

export default function Categories({ posts }: { posts: IPost[] }) {
  const categories = posts.reduce<ICategories>((acc, { frontMatter: { title, date, category, desc } }) => {
    if (!acc[category]) acc[category] = [];
    acc[category].push({ title, date, category, desc });
    return acc;
  }, {});

  return (
    <div className="container flex mx-auto px-32 py-12">
      <div className="flex flex-col w-5/6">
        {Object.entries(categories).map(([category, posts], index) => {
          return <Category key={index} category={category} posts={posts} />;
        })}
      </div>
      <SideBar posts={posts} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
};
