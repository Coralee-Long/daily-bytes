import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h2>
        <p>This is a basic portfolio site built with Next.js and TypeScript.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
