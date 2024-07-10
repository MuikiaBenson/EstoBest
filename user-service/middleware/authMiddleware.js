// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Assuming User model is defined

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ success: false, message: 'Authorization header missing' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.userId); // Add user data to request
        next(); // Move to the next middleware
    } catch (error) {
        console.error('Error verifying token:', error);
        return res.status(401).json({ success: false, message: 'Invalid token' });
    }
};

module.exports = authMiddleware;
