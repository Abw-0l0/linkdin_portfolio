const Post = require('../models/PostModel');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Create a new post
exports.createPost = async (req, res) => {
  const { caption,userId } = req.body;

  try {
    if(req.file){
      const photo = req.file.filename
      const newPost = await Post.create({
        userId: userId,
        caption: caption,
        photo: req.file.filename
      });
      // res.status(201).json(newPost);
      res.status(201).json({ success: 'Post created' });
    } else {
      const photo = ""
      const newPost = await Post.create({
        userId: userId,
        caption: caption,
        photo: photo
      });
      // res.status(201).json(newPost);
      res.status(201).json({ success: 'Post created' });
    }
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(400).json({ error: 'Failed to create post' });
  }
};

// Get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.find().populate("userId").populate('comments.user',"username").populate('likes.user').sort({ createdAt: -1 });
    res.json(allPosts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// like post
exports.likePost = async (req, res) => {
  const {postId,userId} = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(postId) || !mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: 'Invalid postId or userId format' });
    }

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Check if the user has already liked the post
    const isLiked = post.likes.some((like) => like.user.equals(userId));

    if (isLiked) {
      const updatedPost = await Post.findByIdAndUpdate(
        postId,
        { $pull: { likes: { user: userId } } },
        { new: true } // Return the updated document
      );

      res.json(updatedPost);
    } else {
      const updatedPost = await Post.findByIdAndUpdate(
        postId,
        { $push: { likes: { user: userId } } },
        { new: true } // Return the updated document
      );

      res.json(updatedPost);
    }
  } catch (error) {
    console.error('Error liking post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// comment on post
exports.commentPost = async (req, res) => {
  const {postId,userId,text} = req.body;
  console.log("controller :" ,postId,userId,text)

  try {
    if (!mongoose.Types.ObjectId.isValid(postId) || !mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ error: 'Invalid postId or userId format' });
    }

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    const updatedPost = await Post.findOneAndUpdate(
      { _id: postId },
      { $push: { comments: { user: userId, text: text } } },
      { new: true } // Return the updated document
    );
    res.json(updatedPost);

  } catch (error) {
    console.error('Error commenting post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

};

exports.deleteCommentPost = async (req, res) => {
  const {commentId,postId} = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(postId) || !mongoose.Types.ObjectId.isValid(commentId)) {
      return res.status(400).json({ error: 'Invalid postId or userId format' });
    }

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    const updatedPost = await Post.findOneAndUpdate(
      { _id: postId },
      { $pull: { comments: { _id: commentId } } },
      { new: true } // Return the updated document
    );
    res.json(updatedPost);

  } catch (error) {
    console.error('Error commenting post:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

};

exports.deletePost = async (req, res) => {
  const {postId} = req.body;
  console.log(postId)

  try {
    if (!mongoose.Types.ObjectId.isValid(postId)) {
      return res.status(400).json({ error: 'Invalid postId or userId format' });
    }

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    if (post.photo) {
      const filePath = path.join(__dirname, '../uploads', post.photo);
      console.log('File path:', filePath);
      // Check if the file exists before attempting to delete
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`Photo deleted: ${post.photo}`);
      } else {
        console.log(`File not found: ${post.photo}`);
      }
    }

    const deletedPost = await Post.findOneAndDelete({ _id: postId });
    res.json(deletedPost);
  } catch (error) {
    console.error('Error deleting post:', error);
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
