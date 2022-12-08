import { GetServerSideProps } from 'next';
import Title from '../components/title';
import Posts from '../components/posts';
import Sidebar from '../components/sidebar';
import { styled } from '@mui/material/styles';
import { IPost } from '../interfaces/post.interface';
import { useEffect, useState } from 'react';
import { getAllPosts } from './api/getAllPosts';
import { Pagination } from '@mui/material';
import { useTheme } from 'next-themes';

const paginate = (array: IPost[], page_size: number, page_number: number) => {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
};

export default function Index({ posts }: { posts: IPost[] }) {
  const { theme } = useTheme();
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(Math.ceil(posts.length / 5));
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [paginationPosts, setPaginationPosts] = useState(paginate(posts, 5, 1));

  const CustomizedPagination = styled(Pagination)`
    & .MuiPaginationItem-root {
      color: ${theme === 'dark' ? 'rgb(209 213 219)' : 'rgb(17 24 39)'};
      &:hover {
        color: ${theme === 'dark' ? 'rgb(17 24 39)' : 'rgb(209 213 219)'};
        background-color: ${theme === 'dark' ? 'rgb(209 213 219)' : 'rgb(17 24 39)'};
      }
    }

    & .Mui-selected {
      color: ${theme === 'dark' ? 'rgb(17 24 39)' : 'rgb(209 213 219)'};
      background-color: ${theme === 'dark' ? 'rgb(209 213 219) !important' : 'rgb(17 24 39) !important'};
    }
  `;

  const getPosts = ({ category }: { category: string }) => {
    const filteredPosts = category === 'All' ? posts : posts.filter(({ frontMatter: { category: catg } }) => catg === category);
    setPagination({ filteredPosts });
  };

  const setPagination = ({ filteredPosts }: { filteredPosts: IPost[] }) => {
    setFilteredPosts(filteredPosts);
    setPaginationPosts(paginate(filteredPosts, 5, 1));
    setCount(Math.ceil(filteredPosts.length / 5));
  };

  useEffect(() => {
    setPage(1);
  }, [filteredPosts]);

  const paging = (e: any, page: number) => {
    setPage(page);
    setPaginationPosts(paginate(filteredPosts, 5, page));
  };

  return (
    <div className="container mx-auto h-full flex flex-col">
      <div>
        <Title title="Recent Posts" />
        <div className="flex px-32">
          <Posts posts={paginationPosts} />
          <Sidebar posts={posts} getPosts={getPosts} />
        </div>
      </div>
      <CustomizedPagination onChange={paging} page={page} className="flex mt-auto justify-center text-white " count={count} size="large" />
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
