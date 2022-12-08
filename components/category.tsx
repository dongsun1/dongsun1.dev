import Link from 'next/link';
import moment from 'moment';

interface IPosts {
  title: string;
  date: string;
  slug: string;
}

interface ICategory {
  category: string;
  posts: IPosts[];
}

export default function Category({ category, posts }: ICategory) {
  return (
    <div className="mb-8">
      <h1 className="text-3xl mb-3">{category}</h1>
      {posts.map(({ title, date, slug }, index) => {
        return (
          <div key={index} className="mb-1">
            <Link href={`/postPage/${slug}`} className="mr-2 text-base text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
              {title}
            </Link>
            <span className="text-sm text-slate-400">- {moment(new Date(date)).format('MMM MM, YYYY')}</span>
          </div>
        );
      })}
    </div>
  );
}
