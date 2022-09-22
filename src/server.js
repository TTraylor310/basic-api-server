'use strict';

require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3002;
const app = express();
app.use(express.json());

const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

const logger = require('./middleware/logger');
// const validator = require('./middleware/validator');
const foodRouter = require('./routes/food');
const dogsRouter = require('./routes/dogs');

app.use(logger);
// app.use(validator);
app.use(foodRouter);
app.use(dogsRouter);

app.get('/', (req, res, next) => {
  res.status(200).send('Welcome to Tray home, Day 3');
});

app.get('/bad', (req, res, next) => {
  res.status(500).send('Bad route of 500');
});

app.use('*', notFound);
app.use(errorHandler);

function start() {
  app.listen(PORT, () => console.log('listening on port ', PORT));
}

module.exports = {app, start};
