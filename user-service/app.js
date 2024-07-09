// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
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

app.use(cors(corsOptions)); // Adjust options as needed

// Middleware
app.use(bodyParser.json()); // Parse incoming JSON requests

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/userdb', {
 useNewUrlParser: true,
 useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
 console.log('Connected to MongoDB');
});

// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes); // Prefix the routes with /api/users

// Start the server
const PORT = process.env.PORT || 3008;
app.listen(PORT, () => {
 console.log(`Server is running on http://localhost:${PORT}`);
});
