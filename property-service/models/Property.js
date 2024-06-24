const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Assuming your Sequelize instance is configured in config/database.js

const Property = sequelize.define('Property', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'active' // Example default value
  },
  landlord_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  manager_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Property;
