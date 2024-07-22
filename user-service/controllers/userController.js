const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const UserController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.userId);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  createUser: async (req, res) => {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      fullName: req.body.fullName,
      phone: req.body.phone,
      address: req.body.address,
      profilePicture: req.body.profilePicture,
      dateOfBirth: req.body.dateOfBirth,
    });

    try {
      const newUser = await user.save();
      res.status(201).json(newUser);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  updateUser: async (req, res) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
      if (updatedUser) {
        res.json(updatedUser);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const deletedUser = await User.findByIdAndDelete(req.params.userId);
      if (deletedUser) {
        res.json({ message: 'User deleted' });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  signIn: async (req, res) => {
    const { email, password } = req.body;
    try {
      console.log('Sign-in request received:', email);

      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        console.log('User not found:', email);
        return res.status(401).json({ success: false, message: 'Invalid email or password' });
      }

      // Compare hashed password
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        console.log('Invalid password for user:', email);
        return res.status(401).json({ success: false, message: 'Invalid email or password' });
      }

      // Login successful, set session
      req.session.userId = user._id;

      console.log('Login successful for user:', email);
      res.json({ success: true, message: 'Login successful' });
    } catch (error) {
      console.error('Error during sign-in:', error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  },

  signOut: (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ success: false, message: 'Internal server error' });
      }
      res.clearCookie('connect.sid');
      res.json({ success: true, message: 'Logout successful' });
    });
  }
};

module.exports = UserController;
