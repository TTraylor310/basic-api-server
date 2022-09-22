'use strict';

const express = require('express');
const {FoodModel, SequelizeDatabase, customerInterface} = require('../models');
const router = express.Router();


// const validator = require('../middleware/validator');
// router.use(validator);


router.post('/food', async (req, res, send) => {
  const newFood = await customerInterface.create(req.body);
  res.status(200).send(newFood);
});


// ALL
router.get('/food', async (req, res, next) => {
  let response = await customerInterface.read();
  res.status(200).send(response);
});


// ONE
router.get('/food/:id', async (req, res, next) => {
  // let {id} = req.params;
  // let customer = await FoodModel.findOne({where: {id}});

  let customer = await customerInterface.read(req.params.id);
  res.status(200).send(customer);
});





// put updates entire record in database
// patch just portion?
router.put('/food/:id', async( req, res, next) => {
  let {id} = req.params;
  await FoodModel.update(req.body, {where: {id}});
  let customer = await FoodModel.findOne({where: {id}});
  res.status(200).send(customer);
});



router.delete('/food/:id', async(req, res, next) => {
  let {id} = req.params;
  await FoodModel.destroy({where: {id}});
  res.status(200).send('Done deleted');
});



module.exports = router;
