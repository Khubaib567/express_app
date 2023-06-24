const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const { MongoClient, ServerApiVersion } = require('mongodb');


// Declare the environment variable
dotenv.config() 

const uri = "mongodb+srv://Clusters:9cvG4WzpKTToyugV@cluster0.x0fezpj.mongodb.net/?retryWrites=true&w=majority"


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

// Create Express app
const app = express();

// Define a route
app.get('/', async (req, res) => {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        res.send("You successfully connected to MongoDB!");

      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
