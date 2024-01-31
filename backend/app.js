const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use((req, res) => {
  res.json('Firas abidli using app.js!');
});
mongoose.connect('mongodb://127.0.0.1:27017/Project-MERN',
  { useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected successfully to MongoDB !'))
  .catch(() => console.log('Connection failed to MongoDB !'));

  app.use(express.json());

module.exports = app;