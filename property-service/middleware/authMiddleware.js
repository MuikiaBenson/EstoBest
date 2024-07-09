// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');
const jwtSecret = require('../utils/auth');

const authenticate = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Access Denied' });
  }

  try {
    const verified = jwt.verify(token, 'process.env.JWT_SECRET'); // Replace 'your_jwt_secret' with your actual secret
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid Token' });
  }
};

module.exports = authenticate;
