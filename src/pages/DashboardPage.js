import React from 'react';
import { Link } from 'react-router-dom';

export default function DashboardPage() {
  return (
    <section>
      <h1 className="text-5xl">Dashboard</h1>
      <p>This is the dashboard.</p>

      <Link to="/posts" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        View posts
      </Link>
    </section>
  );
}
