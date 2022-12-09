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
  const { theme = 'dark' } = useTheme();
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(Math.ceil(posts.length / 5));
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [paginationPosts, setPaginationPosts] = useState(paginate(posts, 5, 1));

  const getPosts = ({ category }: { category: string }) => {
    const getFilteredPosts = category === 'All' ? posts : posts.filter(({ frontMatter: { category: _category } }) => _category === category);
    setFilteredPosts(getFilteredPosts);
  };

  useEffect(() => {
    setPage(1);
    setPaginationPosts(paginate(filteredPosts, 5, 1));
    setCount(Math.ceil(filteredPosts.length / 5));
  }, [filteredPosts]);

  const paging = (e: any, page: number) => {
    setPage(page);
    setPaginationPosts(paginate(filteredPosts, 5, page));
  };

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

  return (
    <div className="container mx-auto h-full flex flex-col justify-between" style={{ flex: 1 }}>
      <div>
        <Title title="Recent Posts" />
        <div className="flex px-32">
          <Posts posts={paginationPosts} />
          <Sidebar posts={posts} getPosts={getPosts} />
        </div>
      </div>
      <CustomizedPagination onChange={paging} page={page} className="flex mt-6 justify-center text-white" count={count} size="large" />
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
