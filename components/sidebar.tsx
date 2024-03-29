import { ICategoryCounts } from 'interfaces/post.interface';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function SideBar({ categoryCounts, getPosts }: { categoryCounts: ICategoryCounts; getPosts: ({ category }: { category: string }) => void }) {
  const router = useRouter();
  const firstSelected = router.query.slug ? router.query.slug[0] : 'All';

  const [selected, setSelected] = useState(firstSelected);

  const onClickCategory = ({ category }: { category: string }) => {
    setSelected(category);
    getPosts({ category });
  };

  const total = Object.entries(categoryCounts).reduce((acc, [, value]) => (acc += value), 0);

  return (
    <div className="px-5 w-1/6 hidden lg:block">
      <div className="grid grid-cols-1 divide-y sticky top-2 w-44">
        <button
          onClick={() => onClickCategory({ category: 'All' })}
          className="flex items-center justify-between hover:bg-slate-100 dark:hover:bg-gray-600 px-2 py-3 dark:text-gray-300"
        >
          <span className={selected === 'All' ? 'text-green-500' : ''}>All</span>
          <div className="flex items-center border-0 rounded-xl px-2 py-1 text-white bg-black text-xs dark:bg-gray-300">
            <span className="dark:text-gray-900">{total}</span>
          </div>
        </button>
        {Object.entries(categoryCounts).map(([category, number]) => {
          return (
            <button
              onClick={() => onClickCategory({ category })}
              key={category}
              className="flex items-center justify-between hover:bg-slate-100 dark:hover:bg-gray-600 px-2 py-3 dark:text-gray-300"
            >
              <span className={selected === category ? 'text-green-500' : ''}>{category}</span>
              <div className="flex items-center border-0 rounded-xl px-2 py-1 text-white bg-black text-xs dark:bg-gray-300">
                <span className="dark:text-gray-900">{number}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
