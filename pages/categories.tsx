import Category from '../components/category';
import SideBar from '../components/sidebar';
import moment from 'moment';

interface Posts {
  title: string;
  date: string;
}

interface Category {
  category: string;
  posts: Posts[];
}

export default function Categories() {
  const dummy: Category[] = [
    {
      category: 'example',
      posts: [
        { title: '[프로그래머스] 올바른 괄호 - JavaScript', date: moment().format('yyyy-MM-DD') },
        { title: '[프로그래머스] 올바른 괄호 - JavaScript', date: moment().format('yyyy-MM-DD') },
        { title: '[프로그래머스] 올바른 괄호 - JavaScript', date: moment().format('yyyy-MM-DD') },
      ],
    },
    {
      category: 'example',
      posts: [
        { title: '[프로그래머스] 올바른 괄호 - JavaScript', date: moment().format('yyyy-MM-DD') },
        { title: '[프로그래머스] 올바른 괄호 - JavaScript', date: moment().format('yyyy-MM-DD') },
        { title: '[프로그래머스] 올바른 괄호 - JavaScript', date: moment().format('yyyy-MM-DD') },
      ],
    },
    {
      category: 'example',
      posts: [
        { title: '[프로그래머스] 올바른 괄호 - JavaScript', date: moment().format('yyyy-MM-DD') },
        { title: '[프로그래머스] 올바른 괄호 - JavaScript', date: moment().format('yyyy-MM-DD') },
        { title: '[프로그래머스] 올바른 괄호 - JavaScript', date: moment().format('yyyy-MM-DD') },
      ],
    },
  ];
  return (
    <div className="container flex mx-auto px-32 py-12">
      <div className="flex flex-col w-5/6">
        {dummy.map(({ category, posts }, index) => {
          return <Category key={index} category={category} posts={posts} />;
        })}
      </div>
      <SideBar />
    </div>
  );
}
