const express = require('express');
const userController = require('../controllers/UserController');
const multer = require("multer")
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      if (req.file) {
        cb(null, './dev');
      } else {
        cb(null, './uploads/users');
      }
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+"-"+file.originalname);
    },
});

const upload = multer({storage:storage});

// Create a new post
router.post('/userpp',upload.single(('photo'), (req,res) => {
}), userController.userpp);

router.post('/signup', userController.signup);

router.post('/login', userController.login);

router.get('/profile', userController.getUserProfile);

module.exports = router;
