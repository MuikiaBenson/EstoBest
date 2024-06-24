const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const paymentRoutes = require('./routes/paymentRoutes');
app.use('/api/payments', paymentRoutes);

sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
    return sequelize.sync();
  })
  .catch(err => console.log('Error: ' + err));

const PORT = process.env.PORT || 5003;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
