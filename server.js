const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

// allow app to use json data transfer


const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => { app.listen(PORT, () => {
    console.log(`Connected to MongoDB`);
    // Start the server after successful connection to MongoDB
    console.log(`Server is running on port ${PORT}`);
  }); })
  .catch(err => {
    console.error('Database connection error:', err);
  });




