import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-grow p-8 bg-indigo-dark-900" />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
