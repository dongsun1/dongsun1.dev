import { GetServerSideProps } from 'next';
import Title from '../components/title';
import Posts from '../components/posts';
import Sidebar from '../components/sidebar';
import Pagination from '../components/pagination';
import { ICategoryCounts, IPost } from '../interfaces/post.interface';
import { useEffect, useState } from 'react';
import Container from '../components/container';
import axios from 'axios';

export default function Index({ posts, categoryCounts, total, API_URL }: { posts: IPost[]; categoryCounts: ICategoryCounts; total: number; API_URL: string }) {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(Math.ceil(total / 5));
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [paginationPosts, setPaginationPosts] = useState(posts);

  const getPosts = async ({ category }: { category: string }) => {
    const { data: { posts, total } = {} } = await axios.get(`${API_URL}/api/getPaginationPosts`, {
      params: { category },
    });
    setCount(Math.ceil(total / 5));
    setFilteredPosts(posts);
  };

  useEffect(() => {
    setPage(1);
    setPaginationPosts(filteredPosts);
  }, [filteredPosts]);

  const paging = async (e: any, page: number) => {
    setPage(page);

    const { data: { posts } = {} } = await axios.get(`${API_URL}/api/getPaginationPosts`, {
      params: { page },
    });

    setPaginationPosts(posts);
  };

  return (
    <Container>
      <div className="container mx-auto h-full flex flex-col justify-between" style={{ flex: 1 }}>
        <div>
          <Title title="Recent Posts" />
          <div className="flex lg:px-32">
            <Posts posts={paginationPosts} />
            <Sidebar categoryCounts={categoryCounts} total={total} getPosts={getPosts} />
          </div>
        </div>
        <Pagination paging={paging} page={page} count={count} />
      </div>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const { API_URL } = process.env;

    const { data: { posts, total } = {} } = await axios.get(`${API_URL}/api/getPaginationPosts`);
    const { data: { categoryCounts } = {} } = await axios.get(`${API_URL}/api/getCategory`);

    return {
      props: {
        posts,
        categoryCounts,
        total,
        API_URL,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
};
