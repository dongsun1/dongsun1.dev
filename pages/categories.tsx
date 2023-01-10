import Category from '../components/category';
import Title from '../components/title';
import { ICategoryCounts, IPost } from '../interfaces/post.interface';
import { GetServerSideProps } from 'next';
import Container from '../components/container';
import Sidebar from '../components/sidebar';
import axios from '../lib/axios';
import { useRouter } from 'next/router';

interface IPosts {
  _id: string;
  title: string;
  date: Date;
  category: string;
}
interface ICategories {
  [key: string]: IPosts[];
}

export default function Categories({ posts, categoryCounts }: { posts: IPost[]; categoryCounts: ICategoryCounts; API_URL: string }) {
  const router = useRouter();

  const getPosts = ({ category }: { category: string }) => {
    router.push({ pathname: '/categories', query: { category } });
  };

  const categories = posts.reduce<ICategories>((acc, { _id, title, date, category }) => {
    if (!acc[category]) acc[category] = [];
    acc[category].push({ _id, title, date, category });
    return acc;
  }, {});

  return (
    <Container title="dongsun1 blog categories" desc="dongsun1 blog 카테고리별 조회 페이지">
      <div className="container mx-auto">
        <Title title="Categories" />
        <div className="flex px-4 lg:px-32">
          <div className="flex flex-col w-5/6">
            {Object.entries(categories).map(([category, posts]) => {
              return <Category key={category} category={category} posts={posts} />;
            })}
          </div>
          <Sidebar categoryCounts={categoryCounts} getPosts={getPosts} />
        </div>
      </div>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { category = 'All' } = context.query;

    const { data: { posts } = {} } = await axios.get('/api/getPosts', {
      params: { category },
    });

    if (!posts.length) return { notFound: true };

    const { data: { categoryCounts } = {} } = await axios.get('/api/getCategory');

    return {
      props: {
        posts,
        categoryCounts,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      notFound: true,
    };
  }
};
