// routes/maintenanceRoutes.js
const express = require('express');
const router = express.Router();
const maintenanceController = require('../controllers/maintenanceController');
const authMiddleware = require('../middleware/authMiddleware');
const { fetchUserDetails } = require('../userService'); // Import userService

// Route to fetch user details associated with a maintenance request
router.get('/:id/user', authMiddleware, maintenanceController.getUserDetails);

// Other maintenance routes
router.post('/', authMiddleware, maintenanceController.createRequest);
router.get('/', authMiddleware, maintenanceController.getRequests);
router.get('/:id', authMiddleware, maintenanceController.getRequestById);
router.put('/:id', authMiddleware, maintenanceController.updateRequest);
router.delete('/:id', authMiddleware, maintenanceController.deleteRequest);

module.exports = router;
