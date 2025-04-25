const express = require('express');
const studentRoute = require('./routes/student.route.js');
const studentParentRoute = require('./routes/studentparent.route.js');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// Middleware to parse JSON
const app = express();
app.use(express.json());

// Routes
app.use("/api/students", studentRoute);
app.use("/api/studentparents", studentParentRoute);

// Test API
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
    res.send('This is the response from a Node API which is updated');
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.error('Connection Failed!', err);
  });
