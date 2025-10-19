import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl p-4">
      <div className="grid gap-6 md:grid-cols-2">
        <Card title="Task Manager">
          <p className="mb-4 text-gray-700 dark:text-gray-300">Add, complete, delete, and filter tasks. Data persists via localStorage.</p>
          <Button to="/tasks" className="mr-2">Open Tasks</Button>
        </Card>
        <Card title="Posts (API)">
          <p className="mb-4 text-gray-700 dark:text-gray-300">Browse posts from JSONPlaceholder with search and pagination.</p>
          <Button to="/posts">View Posts</Button>
        </Card>
      </div>
    </div>
  );
}
