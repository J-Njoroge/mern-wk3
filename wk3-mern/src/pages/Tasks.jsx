import React, { useEffect, useMemo, useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import useLocalStorage from '../hooks/useLocalStorage';

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="flex items-center justify-between gap-3 py-2">
      <label className="flex items-center gap-3 flex-1">
        <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} className="h-4 w-4" />
        <span className={task.completed ? 'line-through text-gray-500' : ''}>{task.text}</span>
      </label>
      <Button variant="danger" onClick={() => onDelete(task.id)}>Delete</Button>
    </li>
  );
}

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [filter, setFilter] = useState('all');
  const [text, setText] = useState('');

  useEffect(() => {
    // demo useEffect: could be used to sync or log
  }, []);

  const filtered = useMemo(() => {
    if (filter === 'active') return tasks.filter(t => !t.completed);
    if (filter === 'completed') return tasks.filter(t => t.completed);
    return tasks;
  }, [tasks, filter]);

  const addTask = () => {
    const t = text.trim();
    if (!t) return;
    setTasks([{ id: Date.now(), text: t, completed: false }, ...tasks]);
    setText('');
  };

  const toggleTask = (id) => setTasks(tasks.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));

  return (
    <div className="mx-auto max-w-3xl p-4">
      <Card title="Task Manager">
        <div className="flex gap-2 mb-4">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && addTask()}
            placeholder="Add a new task"
            className="flex-1 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 focus:outline-none focus:ring-2"
          />
          <Button onClick={addTask}>Add</Button>
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          <Button variant={filter === 'all' ? 'primary' : 'secondary'} onClick={() => setFilter('all')}>All</Button>
          <Button variant={filter === 'active' ? 'primary' : 'secondary'} onClick={() => setFilter('active')}>Active</Button>
          <Button variant={filter === 'completed' ? 'primary' : 'secondary'} onClick={() => setFilter('completed')}>Completed</Button>
        </div>

        <ul>
          {filtered.length ? (
            filtered.map((task) => (
              <TaskItem key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
            ))
          ) : (
            <p className="text-gray-500">No tasks to show.</p>
          )}
        </ul>
      </Card>
    </div>
  );
}
