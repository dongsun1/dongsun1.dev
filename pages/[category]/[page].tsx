import { GetStaticPaths, GetStaticProps } from 'next';
import { ICategoryCounts, IPost } from 'interfaces/post.interface';
import { useState } from 'react';
import axios from 'lib/axios';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { ParsedUrlQuery } from 'querystring';

const Title = dynamic(import('components/title'));
const Posts = dynamic(import('components/posts'));
const Sidebar = dynamic(import('components/sidebar'));
const Pagination = dynamic(import('components/pagination'));
const Container = dynamic(import('components/container'));

interface IParams extends ParsedUrlQuery {
  category: string;
  page: string;
}

export default function Index({ posts, categoryCounts, total }: { posts: IPost[]; categoryCounts: ICategoryCounts; total: number }) {
  const router = useRouter();
  const [page, setPage] = useState(Number(router.query.page));

  const getPosts = ({ category }: { category: string }) => {
    setPage(1);
    router.push({ pathname: `/${category}/${1}` });
  };

  const paging = (e: any, page: number) => {
    setPage(page);
    router.push({ pathname: `/${router.query.category}/${page}` });
  };

  return (
    <Container>
      <div className="container mx-auto h-full flex flex-col justify-between" style={{ flex: 1 }}>
        <div>
          <Title title="Recent Posts" />
          <div className="flex lg:px-32">
            <Posts posts={posts} />
            <Sidebar categoryCounts={categoryCounts} getPosts={getPosts} />
          </div>
        </div>
        <Pagination paging={paging} page={page} count={Math.ceil(total / 5)} />
      </div>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: { paths } = {} } = await axios.get('/api/getIndexPaths');

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { category, page } = params as IParams;

    const { data: { posts, total } = {} } = await axios.get('/api/getPaginationPosts', {
      params: { page, category },
    });

    if (!posts.length) return { notFound: true };

    const { data: { categoryCounts } = {} } = await axios.get('/api/getCategory');

    return {
      props: {
        posts,
        categoryCounts,
        total,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
};
