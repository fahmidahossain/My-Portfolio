const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const mongoUrl = process.env.mongo_url; // Access the mongo_url from environment variables

// Check if mongoUrl is defined

//console.log(process.env.mongo_url);
mongoose.connect(process.env.mongo_url)
  .then(() => {
    console.log('MongoDB Connection Successful');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

const connection = mongoose.connection;

connection.on('error', () => {
  console.log('Error connecting to MongoDB');
});
connection.on('connected', () => {
  console.log('Mongo DB connected');
});
module.exports = mongoose;
