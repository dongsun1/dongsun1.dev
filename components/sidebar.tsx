import { IPost } from '../interfaces/post.interface';

interface Posts {
  [key: string]: number;
  total: number;
}

export default function SideBar({ posts, getPosts }: { posts: IPost[]; getPosts: ({ category }: { category: string }) => void }) {
  const sideBar = posts.reduce<Posts>(
    (acc, { frontMatter: { category } }) => {
      if (!acc[category]) acc[category] = 0;
      acc[category]++;
      acc.total++;
      return acc;
    },
    { total: 0 },
  );

  const onClickCategory = ({ category }: { category: string }) => {
    getPosts({ category });
  };

  return (
    <div className="px-5 w-1/6">
      <div className="grid grid-cols-1 divide-y sticky top-2 w-44">
        <button onClick={() => onClickCategory({ category: 'All' })} className="flex items-center justify-between hover:bg-slate-100 px-2 py-3">
          <span>All</span>
          <div className="flex items-center border rounded-xl px-2 py-1 text-white bg-black text-xs">
            <span>{sideBar.total}</span>
          </div>
        </button>
        {Object.entries(sideBar).map(([category, number], index) => {
          if (category !== 'total')
            return (
              <button onClick={() => onClickCategory({ category })} key={index} className="flex items-center justify-between hover:bg-slate-100 px-2 py-3">
                <span>{category}</span>
                <div className="flex items-center border rounded-xl px-2 py-1 text-white bg-black text-xs">
                  <span>{number}</span>
                </div>
              </button>
            );
        })}
      </div>
    </div>
  );
}
