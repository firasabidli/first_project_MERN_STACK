const express = require('express');
const mongoose = require('mongoose');
const todoRouter = require('./Routes/Todos');

const app = express();


mongoose.connect('mongodb://127.0.0.1:27017/Project-MERN',)
  .then(() => console.log('Connected successfully to MongoDB !'))
  .catch(() => console.log('Connection failed to MongoDB !'));

  app.use(express.json());

  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use('/api/todos', todoRouter);

module.exports = app;