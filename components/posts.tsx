import moment from 'moment';
import { IPost } from '../interfaces/post.interface';

export default function Posts({ posts }: any) {
  const dummy: IPost[] = [
    {
      title: '[프로그래머스] 올바른 괄호 - JavaScript',
      category: 'example',
      date: moment().format('yyyy-MM-DD'),
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus animi, suscipit, harum vero ipsa at eius totam et quasi, ipsam itaque error voluptas qui libero modi tempore adipisci distinctio maiores!',
    },
    {
      title: '[프로그래머스] 올바른 괄호 - JavaScript',
      category: 'example',
      date: moment().format('yyyy-MM-DD'),
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus animi, suscipit, harum vero ipsa at eius totam et quasi, ipsam itaque error voluptas qui libero modi tempore adipisci distinctio maiores!',
    },
    {
      title: '[프로그래머스] 올바른 괄호 - JavaScript',
      category: 'example',
      date: moment().format('yyyy-MM-DD'),
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus animi, suscipit, harum vero ipsa at eius totam et quasi, ipsam itaque error voluptas qui libero modi tempore adipisci distinctio maiores!',
    },
    {
      title: '[프로그래머스] 올바른 괄호 - JavaScript',
      category: 'example2',
      date: moment().format('yyyy-MM-DD'),
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus animi, suscipit, harum vero ipsa at eius totam et quasi, ipsam itaque error voluptas qui libero modi tempore adipisci distinctio maiores!',
    },
    {
      title: '[프로그래머스] 올바른 괄호 - JavaScript',
      category: 'example2',
      date: moment().format('yyyy-MM-DD'),
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus animi, suscipit, harum vero ipsa at eius totam et quasi, ipsam itaque error voluptas qui libero modi tempore adipisci distinctio maiores!',
    },
    {
      title: '[프로그래머스] 올바른 괄호 - JavaScript',
      category: 'example2',
      date: moment().format('yyyy-MM-DD'),
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus animi, suscipit, harum vero ipsa at eius totam et quasi, ipsam itaque error voluptas qui libero modi tempore adipisci distinctio maiores!',
    },
    {
      title: '[프로그래머스] 올바른 괄호 - JavaScript',
      category: 'example3',
      date: moment().format('yyyy-MM-DD'),
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus animi, suscipit, harum vero ipsa at eius totam et quasi, ipsam itaque error voluptas qui libero modi tempore adipisci distinctio maiores!',
    },
    {
      title: '[프로그래머스] 올바른 괄호 - JavaScript',
      category: 'example3',
      date: moment().format('yyyy-MM-DD'),
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus animi, suscipit, harum vero ipsa at eius totam et quasi, ipsam itaque error voluptas qui libero modi tempore adipisci distinctio maiores!',
    },
  ];

  return (
    <section className="mt-4 text-gray-600 body-font overflow-hidden w-5/6">
      <div className="container px-5 ">
        {dummy.map(({ title, category, date, desc }, index) => {
          return (
            <div key={index} className="-my-8 divide-y-2 divide-gray-100">
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700">{category}</span>
                  <span className="mt-1 text-gray-500 text-sm">{date}</span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{title}</h2>
                  <p className="leading-relaxed">{desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
