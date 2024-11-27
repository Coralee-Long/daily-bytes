import React from 'react';
import GlowCard from '@/components/GlowCard';
import snippetsData from '@/data/snippets.json'; // Import snippets data

// Define the TypeScript interface for a snippet
interface Snippet {
  title: string;
  description: string;
  variant: 'code'; // Snippets page will only use the 'code' variant
  color: 'indigo' | 'white'; // Restrict to valid colors
  code: string;
  language: string;
}

// Assert that the imported JSON data conforms to the Snippet[] type
const snippets: Snippet[] = snippetsData as Snippet[];

const Snippets: React.FC = () => {
  return (
    <div className="p-8 w-100 mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-light-900">
        Snippets
      </h1>
      <p className="text-lg mb-4 text-center text-indigo-light-800">
        Explore a collection of useful code snippets!
      </p>

      <div className="p-8 mx-auto grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {snippets.map((snippet, index) => (
          <GlowCard
            key={index}
            title={snippet.title}
            description={snippet.description}
            variant={snippet.variant}
            color={snippet.color}
            code={snippet.code}
            language={snippet.language}
          />
        ))}
      </div>
    </div>
  );
};

export default Snippets;
