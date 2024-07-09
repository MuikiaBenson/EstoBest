// authMiddleware.js

const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

// Middleware function to verify JWT token
const authMiddleware = (req, res, next) => {
  // Extract token from headers
  const token = req.header('Authorization');

  // Check if token is present
  if (!token) {
    return res.status(401).json({ message: 'Authorization token is missing' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded.user; // Attach user data to request object
    next(); // Continue to the next middleware or route handler
  } catch (err) {
    console.error('JWT verification error:', err);
    return res.status(403).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;
