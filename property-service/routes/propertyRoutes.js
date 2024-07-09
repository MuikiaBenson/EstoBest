// routes/propertyRoutes.js

const express = require('express');
const router = express.Router();
const PropertyController = require('../controllers/propertyController');
const authenticate = require('../middleware/authMiddleware');

// Define routes
router.get('/', PropertyController.getAllProperties);
router.get('/:propertyId', PropertyController.getPropertyById);
router.post('/', authenticate, PropertyController.createProperty);
router.put('/:propertyId', authenticate, PropertyController.updateProperty);
router.delete('/:propertyId', authenticate, PropertyController.deleteProperty);

module.exports = router;
