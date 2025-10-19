/* Reusable Button with variants */
import React from 'react';
import { Link } from 'react-router-dom';

const base = 'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed';
const variants = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500',
  secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus-visible:ring-gray-400 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600',
  danger: 'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500',
  ghost: 'bg-transparent text-inherit hover:bg-gray-100 dark:hover:bg-gray-800',
};

export function Button({ variant = 'primary', className = '', to, ...props }) {
  const classes = [base, variants[variant], className].filter(Boolean).join(' ');
  if (to) {
    return <Link to={to} className={classes} {...props} />;
  }
  return <button className={classes} {...props} />;
}

export default Button;
