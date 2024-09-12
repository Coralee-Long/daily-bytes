import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow p-8 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            Welcome to My Portfolio
          </h1>
          <p className="text-center text-lg mb-4 text-gray-600 dark:text-gray-300">
            This is a basic portfolio site built with Next.js and Tailwind CSS.
          </p>

          {/* Add more content here */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example Content */}
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Project 1</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Description of Project 1.
              </p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Project 2</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Description of Project 2.
              </p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Project 3</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Description of Project 3.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
