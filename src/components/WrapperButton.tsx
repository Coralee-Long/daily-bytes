import React from 'react';

interface WrapperButtonProps {
  children: React.ReactNode; // Content inside the wrapper (e.g., links)
  color?: 'indigo' | 'white'; // Color options for different button styles
}

const WrapperButton: React.FC<WrapperButtonProps> = ({
  children,
  color = 'indigo', // Default color
}) => {
  // Define color styles based on the `color` prop
  const baseColor =
    color === 'indigo' ? 'rgba(46, 41, 105, 0.7)' : 'rgba(230, 230, 235, 1)';
  const hoverColor = color === 'indigo' ? 'indigo-dark-400' : 'white-200';
  const glowColor = color === 'indigo' ? 'indigo-dark-100' : 'white-400';

  return (
    <span
      className={`
        relative inline-flex items-center justify-center px-6 py-2 
        border border-transparent text-white-200 
        rounded-full font-medium
        transition duration-300 ease-in-out 
        bg-transparent 
        hover:bg-${hoverColor} hover:text-${glowColor} 
        focus:outline-none 
        hover:shadow-[0_0_15px_4px_rgba(46,41,105,0.4)] 
        hover:border-${glowColor} 
        active:scale-95 
        cursor-pointer
      `}
      style={{ borderColor: baseColor }} // Set the border color dynamically
    >
      {/* Glow Effect */}
      <span
        className="absolute inset-0 w-full h-full rounded-full transition duration-300 ease-in-out opacity-0 hover:opacity-50"
        style={{
          boxShadow:
            '0 0 15px 3px rgba(46, 41, 105, 0.7), inset 0 0 10px 2px rgba(46, 41, 105, 0.4)',
        }}
      />
      {children}
    </span>
  );
};

export default WrapperButton;
