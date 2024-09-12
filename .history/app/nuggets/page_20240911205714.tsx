// app/projects/page.tsx
import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Projects</h1>
      <p className="text-lg mb-4 text-center">
        Here are some of the projects I've worked on.
      </p>
      
      {/* Example of a grid layout for projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Project 1</h2>
          <p className="text-gray-700 dark:text-gray-300">Description of Project 1.</p>
        </div>
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Project 2</h2>
          <p className="text-gray-700 dark:text-gray-300">Description of Project 2.</p>
        </div>
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Project 3</h2>
          <p className="text-gray-700 dark:text-gray-300">Description of Project 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
