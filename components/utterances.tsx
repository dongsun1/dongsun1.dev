import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';

export default function UtterancesComments() {
  const { theme } = useTheme();
  const elementRef = useRef<HTMLDivElement>(null);
  const utterancesTheme = theme === 'dark' ? 'github-dark' : 'github-light';

  useEffect(() => {
    if (!elementRef.current) return;

    const elements = document.getElementsByClassName('utterances');
    while (elements.length > 0) {
      elements[0].parentNode?.removeChild(elements[0]);
    }

    const scriptElem = document.createElement('script');
    scriptElem.src = 'https://utteranc.es/client.js';
    scriptElem.async = true;
    scriptElem.crossOrigin = 'anonymous';
    scriptElem.setAttribute('repo', 'dongsun1/comments.dev');
    scriptElem.setAttribute('issue-term', 'pathname');
    scriptElem.setAttribute('label', 'blog-comment');
    scriptElem.setAttribute('theme', utterancesTheme);
    elementRef.current.appendChild(scriptElem);
  }, []);

  return <section className="border-t mt-2" ref={elementRef} />;
}
