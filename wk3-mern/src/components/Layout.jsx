import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-dvh bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-50">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-6">
        {children}
      </main>
      <Footer />
    </div>
  );
}
