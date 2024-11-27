import React from 'react';
import GlowCard from '@/components/GlowCard';
import bytesData from '@/data/bytes.json'; // Import bytes data

// Define the TypeScript interface for a byte
interface Byte {
  title: string;
  description: string;
  variant: 'image'; // Bytes page will only use the 'image' variant
  color: 'indigo' | 'white'; // Restrict to valid colors
  imagePublicId: string; // Required for image variant
}

// Assert that the imported JSON data conforms to the Byte[] type
const bytes: Byte[] = bytesData as Byte[];

const Bytes: React.FC = () => {
  return (
    <div className="p-8 w-100 mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-light-900">
        Bytes
      </h1>
      <p className="text-lg mb-4 text-center text-indigo-light-800">
        Explore inspiring projects and ideas!
      </p>

      <div className="p-8 mx-auto grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {bytes.map((byte, index) => (
          <GlowCard
            key={index}
            title={byte.title}
            description={byte.description}
            variant={byte.variant}
            color={byte.color}
            imagePublicId={byte.imagePublicId}
          />
        ))}
      </div>
    </div>
  );
};

export default Bytes;
