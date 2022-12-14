import { styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import { useTheme } from 'next-themes';

export default function pagination({ paging, page, count }: { paging: (e: any, page: number) => void; page: number; count: number }) {
  const [windowWidth, setWindowWidth] = useState(0);
  const { theme = 'dark' } = useTheme();

  const resizeWindow = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', resizeWindow);
    return () => {
      window.removeEventListener('resize', resizeWindow);
    };
  }, [windowWidth]);

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
    <CustomizedPagination
      onChange={paging}
      page={page}
      className="flex mt-6 justify-center text-white w-full"
      count={count}
      size={windowWidth < 640 ? 'small' : 'large'}
    />
  );
}
