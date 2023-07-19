const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import the cors package
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/foodAppDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const contactRouter = require('./contactRouter');

// Middleware - Use CORS for all routes
app.use(cors());

// Parse incoming JSON data
app.use(express.json());

// Mount the contactRouter for '/api/contact' route
app.use('/api/contact', contactRouter);

// Start the server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
