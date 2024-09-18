import GlowButton from './GlowButton';

interface HamburgerMenuProps {
  onClick: () => void;
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ onClick }) => {
  return (
    <GlowButton as="button" color="indigo" onClick={onClick} iconOnly>
      {/* Hamburger Icon (three horizontal lines) */}
      <div className="flex flex-col items-center justify-center space-y-1">
        <span className="block w-5 h-0.5 bg-white rounded-full transition-transform duration-300 group-hover:scale-110" />
        <span className="block w-5 h-0.5 bg-white rounded-full transition-transform duration-300 group-hover:scale-110" />
        <span className="block w-5 h-0.5 bg-white rounded-full transition-transform duration-300 group-hover:scale-110" />
      </div>
    </GlowButton>
  );
};

export default HamburgerMenu;
