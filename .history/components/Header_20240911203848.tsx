import React from 'react';
import Link from 'next/link';

// Define the component as a functional component using React.FC
const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;