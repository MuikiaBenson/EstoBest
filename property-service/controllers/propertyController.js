// controllers/propertyController.js

const Property = require('../models/propertyModel');

const PropertyController = {
  getAllProperties: async (req, res) => {
    try {
      const properties = await Property.find();
      res.json(properties);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  getPropertyById: async (req, res) => {
    try {
      const property = await Property.findById(req.params.propertyId);
      if (property) {
        res.json(property);
      } else {
        res.status(404).json({ message: 'Property not found' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  createProperty: async (req, res) => {
    const property = new Property({
      propertyName: req.body.propertyName,
      description: req.body.description,
      price: req.body.price,
      location: req.body.location,
      status: req.body.status || 'available', // Default to 'available' if not provided
    });

    try {
      const newProperty = await property.save();
      res.status(201).json(newProperty);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  updateProperty: async (req, res) => {
    try {
      const updatedProperty = await Property.findByIdAndUpdate(req.params.propertyId, req.body, { new: true });
      if (updatedProperty) {
        res.json(updatedProperty);
      } else {
        res.status(404).json({ message: 'Property not found' });
      }
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  deleteProperty: async (req, res) => {
    try {
      const deletedProperty = await Property.findByIdAndDelete(req.params.propertyId);
      if (deletedProperty) {
        res.json({ message: 'Property deleted' });
      } else {
        res.status(404).json({ message: 'Property not found' });
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};

module.exports = PropertyController;
