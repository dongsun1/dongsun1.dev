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
  console.info(category);
  console.info(posts);
  // const category = 'example';
  // const title = '[프로그래머스] 올바른 괄호 - JavaScript';
  // const date = moment().format('yyyy-MM-DD');

  // const category: Category = {
  //   category,
  //   posts: [
  //     { title, date },
  //     { title, date },
  //   ],
  // };

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
