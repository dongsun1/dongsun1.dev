import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const { theme = 'dark', setTheme } = useTheme();

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [setLoaded]);

  return (
    <header className="container mx-auto text-gray-600 dark:text-slate-300 body-font flex w-full mb-6">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center border-b">
        <Link className="flex title-font font-medium items-center text-gray-900 dark:text-slate-300 mb-4 md:mb-0" href="/">
          <span className="ml-3 text-xl">dongsun1 Blog</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-gray-400">
            HOME
          </Link>
          <Link href="/resume" className="mr-5 hover:text-gray-400">
            RESUME
          </Link>
          <Link href="/categories/All" className="mr-5 hover:text-gray-400">
            CATEGORIES
          </Link>
          {loaded ? (
            <button type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="text-gray-500 dark:text-gray-400">
              {theme === 'light' ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </button>
          ) : (
            <div></div>
          )}
        </nav>
      </div>
    </header>
  );
}
