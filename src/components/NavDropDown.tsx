import Link from 'next/link';

interface NavDropDownProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavDropDown: React.FC<NavDropDownProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Render nothing if the menu is not open
  return (
    <div className="absolute top-full left-0 w-full bg-indigo-dark-800 text-white py-4 bg-gradient-to-r from-indigo-dark-800 via-indigo-dark-600 to-indigo-dark-400">
      <ul className="flex flex-col items-center space-y-4">
        <li>
          <Link href="/" onClick={onClose}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/bytes" onClick={onClose}>
            Bytes
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={onClose}>
            About
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavDropDown;
