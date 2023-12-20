const express = require('express');
const postController = require('../controllers/PostController');
const multer = require("multer")
// import multer from 'multer'
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../uploads');
    },
    filename: function (req, file, cb) {
      cb(null, date.now()+"-"+file.filename);
    },
});

const upload = multer({storage:storage});

// Create a new post
router.post('/posts',upload.single('image'), postController.createPost);

// Get all posts
router.get('/posts', postController.getAllPosts);

// Get a specific post by ID
router.get('/posts/:postId', postController.getPostById);

// Update a post by ID
router.put('/posts/:postId', postController.updatePostById);

// Delete a post by ID
router.delete('/posts/:postId', postController.deletePostById);

module.exports = router;
