const express = require('express');
const postController = require('../controllers/PostController');
const multer = require("multer")
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      if (req.file) {
        cb(null, './dev');
      } else {
        cb(null, './uploads');
      }
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+"-"+file.originalname);
    },
});

const upload = multer({storage:storage});

// Create a new post
router.post('/posts',upload.single(('photo'), (req,res) => {
}), postController.createPost);

// Get all posts
router.get('/posts', postController.getAllPosts);

// like post
router.post('/like', postController.likePost);

// comment on post
router.post('/comment', postController.commentPost);

// comment on post
router.post('/deletecomment', postController.deleteCommentPost);

// Get a specific post by ID
router.get('/posts/:postId', postController.getPostById);

// Update a post by ID
router.put('/posts/:postId', postController.updatePostById);

// Delete a post by ID
router.delete('/posts/:postId', postController.deletePostById);

module.exports = router;
