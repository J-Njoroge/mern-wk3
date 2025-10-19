import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl p-4 text-center">
      <h1 className="text-3xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="mb-4 text-gray-600 dark:text-gray-300">The page you are looking for does not exist.</p>
      <Link to="/" className="text-blue-600 hover:underline">Go back home</Link>
    </div>
  );
}
