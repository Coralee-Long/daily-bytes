import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-dark-800 via-indigo-dark-600 to-indigo-dark-400 text-white p-16">
      {/* Main container */}
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Subscribe Section */}
        <div className="md:col-span-1">
          <h3 className="text-lg font-semibold mb-4">
            Subscribe to my Newsletter
          </h3>
          <p className="text-sm mb-6">
            Stay updated with the latest tech experiments and portfolio items.
          </p>
          <div className="flex w-full">
            <input
              type="email"
              placeholder="email address"
              className="px-4 py-2 rounded-l-full bg-indigo-dark-900 text-white-100 w-full border border-indigo-dark-400 focus:border-indigo-light-100 focus:outline-none transition duration-300"
            />
            <button className="px-6 py-2 rounded-r-full bg-indigo-dark-200 hover:bg-indigo-dark-400 text-white transition duration-300">
              Submit
            </button>
          </div>
        </div>

        {/* Contact Section */}
        <div className="md:col-span-1">
          <h4 className="text-lg font-semibold mb-4">Contact Me</h4>
          <ul className="space-y-2">
            <li>Email: coraleelong@gmail.com</li>
            <li>Phone: + 49 1522 3454 924</li>
          </ul>
          <p className="font-medium text-base mt-4">
            I might add some linkedIn/github icons and links here
          </p>
        </div>

        {/* Logo and Description Section */}
        <div className="md:col-span-1">
          <h3 className="text-2xl font-bold mb-4">Daily Bytes</h3>
          <p className="text-sm">
            Building small projects daily, experimenting with different
            technologies to create a portfolio that showcases versatility and
            creativity. Perfect for recruiters looking for innovative and
            skilled developers.
          </p>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="mt-12 text-sm text-center border-t border-indigo-dark-600 pt-8">
        <p>© 2024 Daily Bytes. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
