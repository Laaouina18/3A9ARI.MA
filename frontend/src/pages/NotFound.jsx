import React from 'react';

const NotFound = () => {
  return (
    <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-8">Oops! The page you are looking for does not exist.</p>
      <a
        href="/"
        className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition-colors duration-300"
      >
        Go Back to Home
      </a>
    </div>
  );
};

export default NotFound;