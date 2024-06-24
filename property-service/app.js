const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize } = require('sequelize');
require('dotenv').config();

const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Sequelize configuration
const sequelize = new Sequelize(process.env.PG_URI);

// Test database connection and synchronize models
async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log('PostgreSQL connected');
    await sequelize.sync(); // Sync models with database
    console.log('Models synchronized');
  } catch (error) {
    console.error('Unable to connect to PostgreSQL:', error);
    process.exit(1); // Exit process on connection failure
  }
}

connectToDatabase();

// Routes setup
const propertyRoutes = require('./routes/propertyRoutes');
app.use('/api/properties', propertyRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
