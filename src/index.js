const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { db } = require('./config');
const routes = require('./api');

const env = process.env.NODE_ENV || 'dev';
const PORT = 8080;

const app = express();

mongoose.connect(
  db[env],
  { useNewUrlParser: true }
);

const dataBase = mongoose.connection;

dataBase.on('error', console.error.bind(console, 'Database connection error:'));
dataBase.once('open', () => {
  console.log('Database is connected');
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-type');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

const server = app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log(`Server is on in ${env} mode`);
});

module.exports = server;
