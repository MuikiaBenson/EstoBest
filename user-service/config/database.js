// config/database.js

const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/estobest';  // Update with your MongoDB URI

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,  // Ensure this option is set for index creation
      useFindAndModify: false
    });

    // Replace ensureIndex with createIndexes
    mongoose.set('useCreateIndex', true);

    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB Connection Error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
