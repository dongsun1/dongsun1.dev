import { NoSsr } from '@mui/material';
import Link from 'next/link';

interface IPosts {
  _id: string;
  title: string;
  date: Date;
}

interface ICategory {
  category: string;
  posts: IPosts[];
}

export default function Category({ category, posts }: ICategory) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl mb-3">{category}</h1>
      {posts.map(({ _id, title, date }) => {
        const formattedDate = new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

        return (
          <div key={_id} className="mb-1">
            <Link href={`/${_id}`} className="mr-2 text-base text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
              {title}
            </Link>
            <NoSsr>
              <span className="text-sm text-slate-400">- {formattedDate}</span>
            </NoSsr>
          </div>
        );
      })}
    </div>
  );
}
