const Post = require('../models/PostModel');

// Create a new post
exports.createPost = async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(400).json({ error: 'Failed to create post' });
  }
};

// Get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.find();
    res.json(allPosts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Get a specific post by ID
exports.getPostById = async (req, res) => {
  const postId = req.params.postId;
  try {
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    console.error('Error fetching post by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update a post by ID
exports.updatePostById = async (req, res) => {
  const postId = req.params.postId;
  try {
    const updatedPost = await Post.findByIdAndUpdate(postId, req.body, {
      new: true,
    });
    if (!updatedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(updatedPost);
  } catch (error) {
    console.error('Error updating post by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete a post by ID
exports.deletePostById = async (req, res) => {
  const postId = req.params.postId;
  try {
    const deletedPost = await Post.findByIdAndDelete(postId);
    if (!deletedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(deletedPost);
  } catch (error) {
    console.error('Error deleting post by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
