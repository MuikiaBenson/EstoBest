// models/propertyModel.js

const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  propertyName: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  status: { type: String, enum: ['available', 'occupied', 'maintenance'], default: 'available' },
  // Additional fields as per requirements
}, { timestamps: true });

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
