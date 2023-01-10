import Link from 'next/link';
import moment from 'moment';

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
        return (
          <div key={_id} className="mb-1">
            <Link href={`/${_id}`} className="mr-2 text-base text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
              {title}
            </Link>
            <span className="text-sm text-slate-400">- {moment(new Date(date)).format('MMM DD, YYYY')}</span>
          </div>
        );
      })}
    </div>
  );
}
