// src/App.jsx
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

export default function App() {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <nav className="mb-6 flex gap-4 text-blue-600 underline">
        <Link to="/">Criar Post</Link>
        <Link to="/posts">Ver Posts</Link>
      </nav>

      <Routes>
        <Route path="/" element={<PostForm />} />
        <Route path="/posts" element={<PostList />} />
      </Routes>
    </div>
  );
}
