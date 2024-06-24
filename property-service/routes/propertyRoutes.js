const express = require('express');
const router = express.Router();

// Example controller functions
const { createProperty, getProperties, getPropertyById, updateProperty, deleteProperty } = require('../controllers/propertyController');

// Routes
router.post('/', createProperty);
router.get('/', getProperties);
router.get('/:id', getPropertyById);
router.put('/:id', updateProperty);
router.delete('/:id', deleteProperty);

module.exports = router;
