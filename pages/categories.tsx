import Category from '../components/category';
import SideBar from '../components/sidebar';
import moment from 'moment';
import { IPost, ICategory } from '../interfaces/post.interface';

export default function Categories() {
  const dummy: IPost[] = [
    {
      title: '[프로그래머스] 올바른 괄호 - JavaScript',
      category: 'example',
      date: moment().format('yyyy-MM-DD'),
      desc: 'a',
    },
    {
      title: '[프로그래머스] 올바른 괄호 - JavaScript',
      category: 'example',
      date: moment().format('yyyy-MM-DD'),
      desc: 'a',
    },
    {
      title: '[프로그래머스] 올바른 괄호 - JavaScript',
      category: 'example',
      date: moment().format('yyyy-MM-DD'),
      desc: 'a',
    },
    {
      title: '[프로그래머스] 올바른 괄호 - JavaScript',
      category: 'example2',
      date: moment().format('yyyy-MM-DD'),
      desc: 'a',
    },
    {
      title: '[프로그래머스] 올바른 괄호 - JavaScript',
      category: 'example2',
      date: moment().format('yyyy-MM-DD'),
      desc: 'a',
    },
    {
      title: '[프로그래머스] 올바른 괄호 - JavaScript',
      category: 'example2',
      date: moment().format('yyyy-MM-DD'),
      desc: 'a',
    },
    {
      title: '[프로그래머스] 올바른 괄호 - JavaScript',
      category: 'example3',
      date: moment().format('yyyy-MM-DD'),
      desc: 'a',
    },
    {
      title: '[프로그래머스] 올바른 괄호 - JavaScript',
      category: 'example3',
      date: moment().format('yyyy-MM-DD'),
      desc: 'a',
    },
  ];

  const categories = dummy.reduce((acc, { title, category, date, desc }) => {
    if (!acc[category]) acc[category] = [];
    acc[category].push({ title, date, category, desc });
    return acc;
  }, {} as Record<string, Array<IPost>>);

  const filteredCategories = Object.entries(categories).reduce((acc, [category, posts]) => {
    acc.push({ category, posts });
    return acc;
  }, [] as ICategory[]);

  return (
    <div className="container flex mx-auto px-32 py-12">
      <div className="flex flex-col w-5/6">
        {filteredCategories.map(({ category, posts }, index) => {
          return <Category key={index} category={category} posts={posts} />;
        })}
      </div>
      <SideBar />
    </div>
  );
}
