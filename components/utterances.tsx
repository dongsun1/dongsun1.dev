import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';

export default function UtterancesComments() {
  const { theme } = useTheme();
  const elementRef = useRef<HTMLDivElement>(null);
  const utterancesTheme = theme === 'dark' ? 'github-dark' : 'github-light';

  useEffect(() => {
    if (!elementRef.current) return;

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

  return <section ref={elementRef} />;
}
