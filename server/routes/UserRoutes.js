const express = require('express');
const userController = require('../controllers/UserController');

const router = express.Router();

router.post('/signup', userController.signup);

router.post('/login', userController.login);

router.get('/profile', userController.getUserProfile);

module.exports = router;