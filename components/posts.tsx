import { NoSsr } from '@mui/material';
import Link from 'next/link';
import { IPost } from '../interfaces/post.interface';

export default function Posts({ posts }: { posts: IPost[] }) {
  return (
    <section className="mt-4 text-gray-600 body-font overflow-hidden w-full lg:w-5/6">
      <div className="container px-4">
        {posts.map(({ _id, title, category, date, desc }) => {
          const formattedDate = new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

          return (
            <div key={_id} className="divide-y-2 divide-gray-100">
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <div className="font-semibold title-font text-gray-700 dark:text-gray-300">{category}</div>
                  <NoSsr>
                    <div className="mt-1 text-gray-500 text-sm dark:text-gray-400">{formattedDate}</div>
                  </NoSsr>
                </div>
                <div className="flex flex-col md:flex-grow">
                  <Link href={`/${_id}`} className="text-2xl font-medium text-gray-900 title-font mb-2 dark:text-gray-300">
                    {title}
                  </Link>
                  <Link
                    href={`/${_id}`}
                    className="leading-relaxed hover:underline dark:text-gray-400"
                    style={{
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      wordWrap: 'break-word',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                      WebkitLineClamp: 4,
                    }}
                  >
                    {desc}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
