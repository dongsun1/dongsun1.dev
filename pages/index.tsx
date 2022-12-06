import { GetServerSideProps } from 'next';
import Title from '../components/title';
import Posts from '../components/posts';
import Sidebar from '../components/sidebar';
import { IPost } from '../interfaces/post.interface';
import { useState } from 'react';
import { getAllPosts } from './api/getAllPosts';

export default function Index({ posts }: { posts: IPost[] }) {
  const [changedPosts, setPosts] = useState(posts);

  const getPosts = ({ category }: { category: string }) => {
    if (category === 'All') setPosts(posts);
    else {
      const filteredPosts = posts.filter(({ frontMatter: { category: catg } }) => catg === category);
      setPosts(filteredPosts);
    }
  };

  return (
    <div className="container mx-auto">
      <Title title="Recent Posts" />
      <div className="flex px-32">
        <Posts posts={changedPosts} />
        <Sidebar posts={posts} getPosts={getPosts} />
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const posts = await getAllPosts();
    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
