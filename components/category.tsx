import Link from 'next/link';

interface Posts {
  title: string;
  date: string;
}

interface Category {
  category: string;
  posts: Posts[];
}

export default function Category({ category, posts }: Category) {
  return (
    <div className="text-gray-600 mb-8">
      <h1 className="text-3xl mb-3">{category}</h1>
      {posts.map(({ title, date }, index) => {
        return (
          <div key={index} className="mb-1">
            <Link href="/" className="mr-2 text-base hover:text-gray-900">
              {title}
            </Link>
            <span className="text-sm text-slate-400">- {date}</span>
          </div>
        );
      })}
    </div>
  );
}
