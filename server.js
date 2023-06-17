const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')

// Declare the environment variable
dotenv.config() 

// Connect to MongoDB
mongoose.connect(process.env.MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Create Express app
const app = express();

// Define a route
app.get('/', (req, res) => {
  // Check MongoDB connection status
  const connected = mongoose.connection.readyState === 1;
  
  // Prepare response based on connection status
  const message = connected ? 'MongoDB connected' : 'MongoDB not connected';
  
  // Send the response
  res.send(message);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
