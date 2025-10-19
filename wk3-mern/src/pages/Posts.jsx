import React, { useEffect, useMemo, useState } from 'react';
import Card from '../components/Card';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  const pageSize = 10; // 2 pages total

  useEffect(() => {
    let ignore = false;
    setLoading(true); setError(null);
    // Fetch 20 English posts (DummyJSON) to keep to 2 pages
    fetch('https://dummyjson.com/posts?limit=20')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch posts');
        return res.json();
      })
      .then((data) => {
        if (ignore) return;
        // DummyJSON shape: { posts: [...] }
        const normalized = (data.posts || []).map(p => ({
          id: p.id,
          title: String(p.title),
          body: String(p.body),
        }));
        setPosts(normalized);
      })
      .catch((e) => { if (!ignore) setError(e.message); })
      .finally(() => { if (!ignore) setLoading(false); });
    return () => { ignore = true; };
  }, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return posts.filter(p =>
      p.title.toLowerCase().includes(q) || p.body.toLowerCase().includes(q)
    );
  }, [posts, query]);

  const pageCount = Math.ceil(filtered.length / pageSize) || 1;
  const current = filtered.slice((page - 1) * pageSize, page * pageSize);

  useEffect(() => {
    if (page > pageCount) setPage(pageCount);
  }, [pageCount]);

  return (
    <div className="mx-auto max-w-6xl p-4">
      <div className="mb-4 flex items-center gap-2">
        <input
          value={query}
          onChange={(e) => { setQuery(e.target.value); setPage(1); }}
          placeholder="Search posts..."
          className="flex-1 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 focus:outline-none focus:ring-2"
        />
      </div>

      {loading && <p>Loading posts...</p>}
      {error && <p className="text-red-600">Error: {error}</p>}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {current.map((post) => (
          <Card key={post.id} title={post.title}>
            <p className="text-gray-700 dark:text-gray-300">{post.body}</p>
          </Card>
        ))}
      </div>

      {!loading && !error && (
        <div className="mt-6 flex items-center justify-center gap-2">
          <button
            className="px-3 py-2 rounded border border-gray-300 dark:border-gray-700 disabled:opacity-50"
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
          >Previous</button>
          <span className="text-sm">Page {page} of {pageCount}</span>
          <button
            className="px-3 py-2 rounded border border-gray-300 dark:border-gray-700 disabled:opacity-50"
            onClick={() => setPage(p => Math.min(pageCount, p + 1))}
            disabled={page === pageCount}
          >Next</button>
        </div>
      )}
    </div>
  );
}
