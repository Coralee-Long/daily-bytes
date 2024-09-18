import React from 'react';

interface GlowButtonProps<T extends React.ElementType> {
  as?: T; // Prop to dictate the HTML element type
  children: React.ReactNode; // Button text or icon
  onClick?: () => void; // Optional click handler (relevant for button elements)
  color?: 'indigo' | 'white'; // Color options for different button styles
  iconOnly?: boolean; // New prop to indicate if the button is an icon-only button
}

const GlowButton = <T extends React.ElementType = 'button'>({
  as,
  children,
  onClick,
  color = 'indigo', // Default color
  iconOnly = false, // Default to false for regular button
  ...props
}: GlowButtonProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof GlowButtonProps<T>>) => {
  // Define color styles based on the `color` prop
  const baseColor =
    color === 'indigo' ? 'rgba(46, 41, 105, 0.5)' : 'rgba(230, 230, 235, 1)';
  const hoverColor = color === 'indigo' ? 'indigo-light-300' : '#d2d2d6'; // Use hex values directly for hover
  const glowColor = color === 'indigo' ? 'indigo-light-200' : '#bebec4'; // Use hex values directly for glow

  // Set the element type to render, defaulting to 'button'
  const Component = as || 'button';

  return (
    <Component
      onClick={Component === 'button' ? onClick : undefined} // Only add onClick if it's a button
      className={`
        group relative inline-flex items-center justify-center 
        ${
          iconOnly ? 'w-12 h-12' : 'px-6 py-2'
        } // Adjust width and height if iconOnly
        border border-transparent 
        rounded-full font-medium
        transition duration-300 ease-in-out 
        bg-transparent 
        focus:outline-none 
        active:scale-95 
        cursor-pointer
        hover:bg-[${hoverColor}] hover:text-[${glowColor}]
      `}
      style={{
        borderColor: baseColor,
        color: 'inherit', // Ensure color is inherited
      }}
      {...props}
    >
      {/* Glow Effect */}
      <span
        className="absolute inset-0 w-full h-full rounded-full transition duration-300 ease-in-out opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          boxShadow:
            '0 0 25px 5px rgba(46, 41, 105, 0.7), inset 0 0 20px 5px rgba(46, 41, 105, 0.2)', // More intense glow effect
        }}
      />
      {children}
    </Component>
  );
};

export default GlowButton;
