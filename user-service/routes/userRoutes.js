const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const User = mongoose.model('user', { // User schema definition
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  });
  


const router = express.Router();
const UserController = require('../controllers/userController');

// Define routes
router.get('/', UserController.getAllUsers);
router.get('/:userId', UserController.getUserById);
router.post('/', UserController.createUser);
router.put('/:userId', UserController.updateUser);
router.delete('/:userId', UserController.deleteUser);


router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    try {
      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ success: false, message: 'Invalid email or password' });
      }
      // Compare hashed password
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        return res.status(401).json({ success: false, message: 'Invalid email or password' });
      }
      // Login successful, generate JWT token
      const payload = { userId: user._id }; // User ID for token payload
      const secret = 'your_secret_key'; // Replace with actual JWT secret
      const token = jwt.sign(payload, secret, { expiresIn: '1h' }); // Token expires in 1 hour
      res.json({ success: true, token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Internal server error' });
    }
  });
  



module.exports = router;
