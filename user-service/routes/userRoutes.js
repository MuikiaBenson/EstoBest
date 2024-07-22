const express = require('express');
const UserController = require('../controllers/userController');
const router = express.Router();

// Define routes
router.get('/', UserController.getAllUsers);
router.get('/:userId', UserController.getUserById);
router.post('/', UserController.createUser);
router.put('/:userId', UserController.updateUser);
router.delete('/:userId', UserController.deleteUser);

// Register endpoint
router.post('/register', UserController.createUser);

// Sign-in and sign-out routes (No authentication middleware needed here)
router.post('/signin', UserController.signIn);
router.post('/signout', UserController.signOut);

module.exports = router;
