const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true, minlength: 6 }, // Example: Minimum length of 6 characters
  role: { type: String, enum: ['tenant', 'property_manager', 'landlord'], default: 'tenant' },
  fullName: { type: String, trim: true },
  phone: { type: String, match: /^\+(?:[0-9] ?){6,14}[0-9]$/ }, // Example: Regex for international phone numbers
  address: { type: String, maxlength: 100 }, // Example: Max length of 100 characters
  profilePicture: { type: String, validate: /^https?:\/\// }, // Example: Validate URL format
  dateOfBirth: { type: Date, validate: { validator: isValidDate, message: '{VALUE} is not a valid date' } },
}, { timestamps: true });

// Indexes
userSchema.index({ email: 1 }, { unique: true });

// Pre-save hook for password hashing
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

// Custom method to compare passwords
userSchema.methods.comparePassword = async function(candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw new Error(error);
  }
};

function isValidDate(value) {
  return value instanceof Date && !isNaN(value);
}

const User = mongoose.model('User', userSchema);

module.exports = User;
