// src/components/PostList.jsx
import React, { useEffect, useState } from "react";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold mb-4">Publicações</h2>
      {posts.map((post) => (
        <div key={post._id} className="border p-4 rounded bg-gray-50">
          <h3 className="text-xl font-semibold">{post.title}</h3>
          <p className="text-sm text-gray-600">Por {post.author} - {new Date(post.createdAt).toLocaleDateString()}</p>
          <p className="mt-2">{post.content}</p>
        </div>
      ))}
    </div>
  );
}
