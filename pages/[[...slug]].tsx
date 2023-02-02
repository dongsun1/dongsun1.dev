import { GetStaticPaths, GetStaticProps } from 'next';
import { ICategoryCounts, IPost } from 'interfaces/post.interface';
import { useState } from 'react';
import axios from 'lib/axios';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const Title = dynamic(import('components/title'));
const Posts = dynamic(import('components/posts'));
const Sidebar = dynamic(import('components/sidebar'));
const Pagination = dynamic(import('components/pagination'));
const Container = dynamic(import('components/container'));

export default function Index({ posts, categoryCounts, total }: { posts: IPost[]; categoryCounts: ICategoryCounts; total: number }) {
  const [page, setPage] = useState(1);
  const router = useRouter();

  const getPosts = ({ category }: { category: string }) => {
    setPage(1);
    router.push({ pathname: `/${category}/${1}` });
  };

  const paging = (e: any, page: number) => {
    setPage(page);
    const category = router.query.slug ? router.query.slug[0] : 'All';
    router.push({ pathname: `/${category}/${page}` });
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

export const getStaticProps: GetStaticProps = async ({ params: { slug = [] } = {} }) => {
  try {
    const category = slug.length === 2 ? slug[0] : 'All';
    const page = slug.length === 2 ? slug[1] : '1';

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
