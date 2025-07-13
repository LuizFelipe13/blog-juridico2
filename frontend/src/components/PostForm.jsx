import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PostForm() {
  const [form, setForm] = useState({ title: "", author: "", content: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // hook do React Router

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setMessage("✅ Post criado com sucesso!");
      setForm({ title: "", author: "", content: "" });

      setTimeout(() => {
        navigate("/posts"); // redireciona para a página de posts após 1s
      }, 1000);
    } else {
      alert("Erro ao criar post");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded-lg">
      <h2 className="text-xl font-bold">Criar novo post</h2>

      {message && <p className="text-green-600 font-semibold">{message}</p>}

      <input
        type="text"
        name="title"
        placeholder="Título"
        value={form.title}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Autor"
        value={form.author}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      <textarea
        name="content"
        placeholder="Conteúdo"
        value={form.content}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        rows="5"
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Publicar
      </button>
    </form>
  );
}
