// app.js

const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const propertyRoutes = require('./routes/propertyRoutes');
const cors = require('cors'); // Assuming you installed it
// Initialize Express app
const app = express();

// Configure CORS options (optional for specific needs)
const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your frontend origin
  methods: 'GET,POST,PUT,DELETE', // Allowed HTTP methods (optional)
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'], // Allowed headers (optional)
  credentials: true // Allow cookies (optional)
};

app.use(cors(corsOptions));  // Adjust options as needed

// Middleware
app.use(bodyParser.json()); // Parse incoming JSON requests

// Connect to MongoDB
connectDB();

// Routes
app.use(propertyRoutes);

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Starting Server .....")
  console.log(`Server is running on http://localhost:${PORT}`);
});
