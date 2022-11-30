import Posts from '../components/posts';
import Sidebar from '../components/sidebar';
import { getAllPosts } from '../lib/matter-util';

export default function Index({ posts }: any) {
  return (
    <div className="container mx-auto">
      <div className="flex px-32">
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
  };
};
