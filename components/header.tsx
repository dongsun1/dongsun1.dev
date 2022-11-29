import Link from 'next/link';

export default function Header() {
  return (
    <header className="container mx-auto text-gray-600 body-font flex w-full border-b">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
          <span className="ml-3 text-xl">dongsun1 Blog</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-gray-900">
            HOME
          </Link>
          <Link href="/about" className="mr-5 hover:text-gray-900">
            ABOUT
          </Link>
          <Link href="/categories" className="mr-5 hover:text-gray-900">
            CATEGORIES
          </Link>
        </nav>
      </div>
    </header>
  );
}
