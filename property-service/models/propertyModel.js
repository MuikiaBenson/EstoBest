const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  propertyName: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  status: { type: String, enum: ['available', 'occupied', 'maintenance'], default: 'available' },
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  managerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  tenantId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
