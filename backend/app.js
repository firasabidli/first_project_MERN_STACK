const express = require('express');

const app = express();

app.use((req, res) => {
  res.json('Firas abidli using app.js!');
});

module.exports = app;