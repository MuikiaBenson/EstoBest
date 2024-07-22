const Property = require('../models/propertyModel');
const axios = require('axios');

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
    const { propertyName, description, price, location, status, ownerId, managerId, tenantId } = req.body;
    const property = new Property({
      propertyName,
      description,
      price,
      location,
      status,
      ownerId,
      managerId,
      tenantId
    });

    try {
      // Fetch owner, manager, and tenant from user-service
      const owner = await axios.get(`http://localhost:3008/api/users/${ownerId}`);
      const manager = managerId ? await axios.get(`http://localhost:3008/api/users/${managerId}`) : null;
      const tenant = tenantId ? await axios.get(`http://localhost:3008/api/users/${tenantId}`) : null;

      if (!owner.data || (managerId && !manager.data) || (tenantId && !tenant.data)) {
        return res.status(404).json({ message: 'Owner, manager, or tenant not found' });
      }

      const newProperty = await property.save();
      res.status(201).json(newProperty);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  updateProperty: async (req, res) => {
    const { propertyName, description, price, location, status, ownerId, managerId, tenantId } = req.body;
    try {
      const updatedProperty = await Property.findByIdAndUpdate(
        req.params.propertyId,
        { propertyName, description, price, location, status, ownerId, managerId, tenantId },
        { new: true }
      );
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
