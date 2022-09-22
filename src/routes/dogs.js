'use strict';

const express = require('express');
const {dogModel} = require('../models/dogs');
const router = express.Router();

router.post('/dog', async (req, res, send) => {
  console.log('req body', req.body);

  const newDog = await dogModel.create(req.body);
  res.status(200).send(newDog);
});

// router.get('/food/:id', async (req, res, send) => {
//   console.log('req.body', req.body);

//   const idFood = await food
// });

module.exports = router;
