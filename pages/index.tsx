import { GetServerSideProps } from 'next';
import Title from '../components/title';
import Posts from '../components/posts';
import Sidebar from '../components/sidebar';
import Pagination from '../components/pagination';
import { ICategoryCounts, IPost } from '../interfaces/post.interface';
import { useState } from 'react';
import Container from '../components/container';
import axios from '../lib/axios';
import { useRouter } from 'next/router';

export default function Index({
  posts,
  categoryCounts,
  total,
  categoryTotal,
}: {
  posts: IPost[];
  categoryCounts: ICategoryCounts;
  total: number;
  categoryTotal: number;
}) {
  const [page, setPage] = useState(1);
  const router = useRouter();

  const getPosts = ({ category }: { category: string }) => {
    router.push({ pathname: '/', query: { page: 1, category } });
  };

  const paging = (e: any, page: number) => {
    setPage(page);
    router.push({ pathname: '/', query: { page, category: router.query.category } });
  };

  return (
    <Container>
      <div className="container mx-auto h-full flex flex-col justify-between" style={{ flex: 1 }}>
        <div>
          <Title title="Recent Posts" />
          <div className="flex lg:px-32">
            <Posts posts={posts} />
            <Sidebar categoryCounts={categoryCounts} total={total} getPosts={getPosts} />
          </div>
        </div>
        <Pagination paging={paging} page={page} count={Math.ceil(categoryTotal / 5)} />
      </div>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { page = 1, category = 'All' } = context.query;

    const { data: { posts, total, categoryTotal } = {} } = await axios.get('/api/getPaginationPosts', {
      params: { page, category },
    });

    if (!posts.length) return { notFound: true };

    const { data: { categoryCounts } = {} } = await axios.get('/api/getCategory');

    return {
      props: {
        posts,
        categoryCounts,
        total,
        categoryTotal,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
};
