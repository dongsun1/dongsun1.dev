import Link from 'next/link';
import { IPost } from '../interfaces/post.interface';

export default function Posts({ posts }: { posts: IPost[] }) {
  return (
    <section className="mt-4 text-gray-600 body-font overflow-hidden w-5/6 md:w-full">
      <div className="container px-5 ">
        {posts.map(({ frontMatter: { title, category, date, desc }, slug }, i) => {
          return (
            <div key={i} className="-my-8 divide-y-2 divide-gray-100">
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700 dark:text-gray-300">{category}</span>
                  <span className="mt-1 text-gray-500 text-sm dark:text-gray-400">{date}</span>
                </div>
                <div className="flex flex-col md:flex-grow">
                  <Link href={`/postPage/${slug}`} className="text-2xl font-medium text-gray-900 title-font mb-2 dark:text-gray-300">
                    {title}
                  </Link>
                  <Link href={`/postPage/${slug}`} className="leading-relaxed hover:underline dark:text-gray-400">
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
