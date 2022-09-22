'use strict';

const {start} = require ('./src/server');
const {sequelizeDatabase, foodModel, dogModel} = require('./src/models');

sequelizeDatabase.sync()
  .then(() => {
    console.log('Successful connection!');
  })
  .catch(err => console.error(err));

start();
