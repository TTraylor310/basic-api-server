'use strict';

require('dotenv').config();
const {Sequelize, DataTypes} = require('sequelize');
const foodSchema = require('../models/food');
const dogSchema = require('../models/dogs');
const ModelInterface = require('./modelInterface');

const DATABASE_URL = process.env.NODE_ENV === 'test' 
  ? 'sqlite:memory' 
  : process.env.DATABASE_URL;



const sequelizeDatabase = new Sequelize(DATABASE_URL);
const FoodModel = foodSchema(sequelizeDatabase, DataTypes);
const DogModel = dogSchema(sequelizeDatabase, DataTypes);


FoodModel.hasMany(DogModel);
DogModel.belongsTo(FoodModel);


module.exports = {
  sequelizeDatabase,
  FoodModel,
  DogModel,
  customerInterface: new ModelInterface(FoodModel),
};

