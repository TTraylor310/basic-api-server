'use strict';

const express = require('express');
const {FoodModel, SequelizeDatabase} = require('../models');
const router = express.Router();
// const validator = require('../middleware/validator');

// router.use(validator);

router.post('/food', async (req, res, send) => {
  console.log('req body', req.body);

  const newFood = await FoodModel.create(req.body);
  res.status(200).send(newFood);
});

// router.get('/food/:id', async (req, res, send) => {
//   console.log('req.body', req.body);

//   const idFood = await food
// });

module.exports = router;
