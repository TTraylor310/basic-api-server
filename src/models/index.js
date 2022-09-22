'use strict';

require('dotenv').config();

const {Sequelize, DataTypes} = require('sequelize');
const foodSchema = require('../models/food');
const dogSchema = require('../models/dogs');


const DATABASE_URL = process.env.NODE_ENV === 'test' 
  ? 'sqlite:memory' 
  : process.env.DATABASE_URL;


const sequelizeDatabase = new Sequelize(DATABASE_URL);
const foodModel = foodSchema(sequelizeDatabase, DataTypes);
const dogModel = dogSchema(sequelizeDatabase, DataTypes);

module.exports = {sequelizeDatabase, foodModel, dogModel};

// sequelizeDatabase.sync()
//   .then(() => console.log('Successful Connection!'))
//   .catch(err => console.error(err));
