const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "Erro ao buscar posts", error: err.message });
  }
});

router.post("/", async (req, res) => {
  const { title, author, content } = req.body;
  try {
    const newPost = await Post.create({ title, author, content });
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json({ message: "Erro ao criar post", error: err.message });
  }
});

module.exports = router;
