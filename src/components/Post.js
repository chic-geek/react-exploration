import React from 'react';

export default function Post({ post }) {
  return (
    <article className="p-6 bg-white mb-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-light leading-tight capitalize">{post.title}</h2>
      <p className="mt-6 leading-relaxed sm:text-lg md:text-xl xl:text-lg text-gray-600">
        {post.body.substring(0, 100)}
      </p>
    </article>
  );
}
