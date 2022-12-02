import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getIntersectionObserver } from '../lib/observer';

export default function Toc() {
  const router = useRouter();
  const [, setCurrentId] = useState<string>('');
  const [headingEls, setHeadingEls] = useState<Element[]>([]);

  useEffect(() => {
    const observer = getIntersectionObserver(setCurrentId);
    const headingElements = Array.from(document.querySelectorAll('h2, h3'));

    setHeadingEls(
      headingElements.map((el, i) => {
        el.classList.add(i.toString());
        el.id = i.toString();
        return el;
      }),
    );

    headingElements.map((header) => {
      observer.observe(header);
    });
  }, [router]);

  return (
    <div className="w-1/6 h-full grid grid-cols-1 sticky top-4 hidden lg:block">
      <h1 className="text-2xl font-medium mb-2">TOC</h1>
      <section className="flex flex-col text-gray-600 body-font border-l pl-2">
        {headingEls.map((h, i) => {
          return (
            <a key={i} href={`#${h.id}`} className={'py-1 text-sm hover:text-gray-900 ' + (h.nodeName === 'H2' ? '' : 'pl-3')}>
              {h.textContent}
            </a>
          );
        })}
      </section>
    </div>
  );
}
