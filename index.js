'use strict';

const {start} = require ('./src/server');
const {sequelizeDatabase} = require('./src/models');

sequelizeDatabase.sync()
  .then(() => {
    console.log('Successful connection!');
  })
  .catch(err => console.error(err));

start();
