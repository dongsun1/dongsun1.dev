import Image from 'next-image-export-optimizer';
import Link from 'next/link';
import Github from '../public/github.png';
import GithubWhite from '../public/github-white.png';
import LinkedIn from '../public/linkedin.png';
import LinkedInWhite from '../public/linkedin-white.png';
import { useTheme } from 'next-themes';

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="container text-gray-600 body-font mx-auto mt-auto w-full">
      <div className="container p-5 mx-auto flex items-center sm:flex-row flex-col mt-6 border-t">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="ml-3 text-xl dark:text-gray-300">dongsun1 blog</span>
        </a>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link href="https://www.linkedin.com/in/%EB%8F%99%EC%84%A0-%EA%B9%80-5197ba219/" className="ml-3 flex items-centers dark:bg-white">
            <Image src={theme === 'dark' ? LinkedInWhite : LinkedIn} alt="깃허브" width={20} height={20} />
          </Link>
          <Link href="https://www.github.com/dongsun1" className="ml-3 flex items-centers">
            <Image src={theme === 'dark' ? GithubWhite : Github} alt="깃허브" width={20} height={20} />
          </Link>
        </span>
      </div>
    </footer>
  );
}
