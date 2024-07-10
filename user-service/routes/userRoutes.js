// routes/userRoutes.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/userModel'); // Use the User model from userModel.js
const UserController = require('../controllers/userController');
const router = express.Router();

// Define routes
router.get('/', UserController.getAllUsers);
router.get('/:userId', UserController.getUserById);
router.post('/', UserController.createUser);
router.put('/:userId', UserController.updateUser);
router.delete('/:userId', UserController.deleteUser);

router.post('/signin', async (req, res) => {
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

        // Login successful, generate JWT token
        const payload = { userId: user._id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }); // Use environment variable for secret

        console.log('Login successful for user:', email);
        res.json({ success: true, token });
    } catch (error) {
        console.error('Error during sign-in:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

module.exports = router;
