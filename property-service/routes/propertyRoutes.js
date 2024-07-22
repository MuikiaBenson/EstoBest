const express = require('express');
const PropertyController = require('../controllers/propertyController');
const router = express.Router();

// Define routes
router.get('/', PropertyController.getAllProperties);
router.get('/:propertyId', PropertyController.getPropertyById);
router.post('/', PropertyController.createProperty);
router.put('/:propertyId', PropertyController.updateProperty);
router.delete('/:propertyId', PropertyController.deleteProperty);

module.exports = router;
