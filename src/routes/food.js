'use strict';

const express = require('express');
const {foodModel} = require('../models/food');
const router = express.Router();

router.post('/food', async (req, res, send) => {
  console.log('req body', req.body);

  const newFood = await foodModel.create(req.body);
  res.status(200).send(newFood);
});

// router.get('/food/:id', async (req, res, send) => {
//   console.log('req.body', req.body);

//   const idFood = await food
// });

module.exports = router;
