const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/UserModel');
const fs = require('fs');
const path = require('path');

const createToken = (userId) => {
  return jwt.sign({ userId }, 'your-secret-key', { expiresIn: '1h' });
};

// Controller for user signup
exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    const newUser = new User({ username, email, password });
    await newUser.save();

    const token = createToken(newUser._id);
    res.status(201).json({ userId: newUser._id, token });
  } catch (error) {
    console.error('Error signing up user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller for user login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(401).json({ error: 'Email not found' });
    }
    
    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log(passwordMatch)
    
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Incorrect password' });
    }
    
    const token = createToken(user._id);
    res.json({ userId: user._id, token, email, username: user.username,photo: user.photo});
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller for user login
exports.userpp = async (req, res) => {
  const {userId,photo} = req.body
  console.log("a",userId)
  try {
    const user = await User.findOne({ _id: userId });
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    if (user.photo) {
      const filePath = path.join(__dirname, '../uploads/users', user.photo);
      console.log('File path:', filePath);
      // Check if the file exists before attempting to delete
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`Photo deleted: ${user.photo}`);
      } else {
        console.log(`File not found: ${user.photo}`);
      }
    }

    if(req.file){
      console.log("b",userId)
      const photo = req.file.filename
      // user.photo = photo;
      
      const user = await User.findOneAndUpdate(
        { _id: userId },
        { $set: { photo: photo } },
        { new: true }
      );
      
      res.json({ message: 'Profile photo updated successfully', user });
    } else {
      res.json({ message: 'Profile photo not updated', user });
    }
  } catch (error) {
    console.error('Error updating profile photo:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }};

// Controller for getting user profile
exports.getUserProfile = async (req, res) => {
  try {
    // Assuming you have middleware for authenticating the user and setting req.userId
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ userId: user._id, username: user.username, email: user.email });
  } catch (error) {
    console.error('Error getting user profile:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
