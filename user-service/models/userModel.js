const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true, minlength: 6 },
  role: { type: String, enum: ['tenant', 'property_manager', 'landlord'], default: 'tenant' },
  fullName: { type: String, trim: true },
  phone: { type: String, match: /^\+(?:[0-9] ?){6,14}[0-9]$/ },
  address: { type: String, maxlength: 100 },
  profilePicture: { type: String, match: /^https?:\/\// },
  dateOfBirth: { type: Date, validate: { validator: isValidDate, message: '{VALUE} is not a valid date' } },
}, { timestamps: true });

userSchema.index({ email: 1 }, { unique: true });

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
