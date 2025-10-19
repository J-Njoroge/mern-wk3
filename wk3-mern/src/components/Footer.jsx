import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-200 dark:border-gray-800 py-6 text-sm text-gray-600 dark:text-gray-300">
      <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} PLP Week 3 App. All rights reserved.</p>
        <div className="flex gap-4">
          <a className="hover:underline" href="https://react.dev" target="_blank" rel="noreferrer">React</a>
          <a className="hover:underline" href="https://tailwindcss.com" target="_blank" rel="noreferrer">Tailwind</a>
          <a className="hover:underline" href="https://vitejs.dev" target="_blank" rel="noreferrer">Vite</a>
        </div>
      </div>
    </footer>
  );
}
