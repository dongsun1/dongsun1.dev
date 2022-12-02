import { GetStaticProps } from 'next';
import Title from '../components/title';
import Posts from '../components/posts';
import Sidebar from '../components/sidebar';
import { IPost } from '../interfaces/post.interface';
import { getAllPosts } from '../lib/matter-util';

export default function Index({ posts }: { posts: IPost[] }) {
  return (
    <div className="container mx-auto">
      <Title title="Recent Posts" />
      <div className="flex px-32">
        <Posts posts={posts} />
        <Sidebar posts={posts} />
      </div>
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
