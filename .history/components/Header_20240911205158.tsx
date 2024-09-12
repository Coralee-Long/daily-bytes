import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4 h-[10vh]">
      <nav className="flex justify-between items-center max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <a className="hover:underline">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a className="hover:underline">Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="hover:underline">About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
