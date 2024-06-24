const Property = require('../models/Property');

// Controller function to add a property
exports.createProperty = async (req, res) => {
  const { name, address, status, landlord_id, manager_id } = req.body;
  try {
    // Create a new Property instance
    const property = await Property.create({
      name,
      address,
      status,
      landlord_id,
      manager_id
    });

    // Respond with the saved property object in JSON format
    res.json(property);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Controller function to get all properties
exports.getProperties = async (req, res) => {
  try {
    // Find all properties from the database
    const properties = await Property.findAll();
    
    // Respond with the array of properties in JSON format
    res.json(properties);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Controller function to get a property by ID
exports.getPropertyById = async (req, res) => {
  const id = req.params.id; // Get property ID from URL parameter
  try {
    // Find property by ID from the database
    const property = await Property.findByPk(id);
    
    // If property is found, respond with the property object in JSON format
    if (property) {
      res.json(property);
    } else {
      res.status(404).send('Property not found');
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Controller function to update a property by ID
exports.updateProperty = async (req, res) => {
  const id = req.params.id; // Get property ID from URL parameter
  const { name, address, status, landlord_id, manager_id } = req.body; // Get updated data from request body
  try {
    // Find property by ID in the database
    let property = await Property.findByPk(id);
    
    // If property is found, update its attributes
    if (property) {
      property = await property.update({
        name,
        address,
        status,
        landlord_id,
        manager_id
      });
      
      // Respond with the updated property object in JSON format
      res.json(property);
    } else {
      res.status(404).send('Property not found');
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Controller function to delete a property by ID
exports.deleteProperty = async (req, res) => {
  const id = req.params.id; // Get property ID from URL parameter
  try {
    // Find property by ID in the database
    const property = await Property.findByPk(id);
    
    // If property is found, delete it
    if (property) {
      await property.destroy();
      res.send('Property deleted');
    } else {
      res.status(404).send('Property not found');
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
