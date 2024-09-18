'use client'; // Mark as Client Component

import { useState } from 'react';
import Link from 'next/link';
import GlowButton from './GlowButton';
import HamburgerMenu from './HamburgerMenu';
import NavDropdown from './NavDropDown';

const Header: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMenuToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const HandleCloseMenu = () => {
    setIsExpanded(false);
  };
  return (
    <header className="relative bg-indigo-dark-900 text-white-100 p-6 px-10 h-[10vh]">
      <nav className="flex justify-between items-center w-100 mx-auto">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Daily Bytes</h1>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <GlowButton as="span" color="indigo">
              <Link
                href="/"
                className="block w-full h-full rounded-full text-inherit hover:no-underline"
              >
                Home
              </Link>
            </GlowButton>
          </li>
          <li>
            <GlowButton as="span" color="indigo">
              <Link
                href="/bytes"
                className="block w-full h-full rounded-full text-inherit hover:no-underline"
              >
                Bytes
              </Link>
            </GlowButton>
          </li>
          <li>
            <GlowButton as="span" color="indigo">
              <Link
                href="/about"
                className="block w-full h-full rounded-full text-inherit hover:no-underline"
              >
                About
              </Link>
            </GlowButton>
          </li>
        </ul>

        {/* Hamburger Menu Button */}
        {/* TODO: Animate icon to X when menu toggled open */}
        <div className="md:hidden">
          <HamburgerMenu onClick={handleMenuToggle} />
        </div>
      </nav>

      {/* DropDown Menu */}
      <div className="md:hidden">
        <NavDropdown isOpen={isExpanded} onClose={HandleCloseMenu} />
      </div>

      {/* Faint line under the header */}
      <div className="absolute left-0 right-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-dark-200 to-transparent" />
    </header>
  );
};

export default Header;
