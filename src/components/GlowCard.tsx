'use client';

import { CldImage } from 'next-cloudinary';

interface GlowCardProps {
  title: string;
  description: string;
  imagePublicId: string; // Cloudinary public ID
  color?: 'indigo' | 'white'; // Color options for different glow styles
}

const GlowCard: React.FC<GlowCardProps> = ({
  title,
  description,
  imagePublicId,
  color = 'indigo',
}) => {
  // Define color styles based on the `color` prop
  const baseColor =
    color === 'indigo' ? 'rgba(46, 41, 105, 0.5)' : 'rgba(230, 230, 235, 1)';
  const glowColor = color === 'indigo' ? 'rgba(46, 41, 105, 0.7)' : '#bebec4';

  return (
    <div
      className={`
        group relative p-6
        shadow-md bg-transparent 
        border 
        transition duration-300 ease-in-out transform 
        hover:scale-101 cursor-pointer
      `}
      style={{
        borderColor: baseColor,
      }}
    >
      {/* Hover Glow Effect */}
      <span
        className="absolute inset-0 w-full h-full transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{
          boxShadow: `0 0 25px 10px ${glowColor}, inset 0 0 20px 5px ${glowColor}`, // Outer and inner glow
        }}
      />

      {/* Image */}
      <div className="overflow-hidden mb-4">
        <CldImage
          src={imagePublicId}
          width={500}
          height={500}
          alt={title}
          crop="fill"
          gravity="auto"
          quality="auto"
          format="auto"
        />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold mb-2 text-indigo-light-900">{title}</h2>

      {/* Description */}
      <p className="text-indigo-light-600">{description}</p>
    </div>
  );
};

export default GlowCard;
