import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const linkBase = 'px-3 py-2 rounded-md text-sm font-medium';

export default function Navbar() {
  const activeClass = ({ isActive }) =>
    `${linkBase} ${isActive ? 'bg-blue-600 text-white' : 'text-gray-800 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800'}`;

  return (
    <nav className="sticky top-0 z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          <Link to="/" className="text-blue-600 dark:text-blue-400 font-semibold">PLP Week 3</Link>
          <div className="flex items-center gap-2">
            <NavLink to="/" className={activeClass} end>Home</NavLink>
            <NavLink to="/tasks" className={activeClass}>Tasks</NavLink>
            <NavLink to="/posts" className={activeClass}>Posts</NavLink>
            {/* Dark mode only; toggle removed */}
          </div>
        </div>
      </div>
    </nav>
  );
}
