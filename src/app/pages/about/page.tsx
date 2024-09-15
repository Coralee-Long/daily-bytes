// app/about/page.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>
      <p className="text-lg text-center mb-4">
        Hi, I'm a developer passionate about building web applications. I enjoy
        working with modern JavaScript frameworks like React, Next.js, and more.
      </p>
      <p className="text-center text-gray-600 dark:text-gray-300">
        This portfolio showcases some of the projects I've worked on. Feel free
        to explore and reach out if you have any questions!
      </p>
    </div>
  );
};

export default About;
