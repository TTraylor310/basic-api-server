'use strict';

require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT || 3002;

const app = express();
app.use(express.json());




function start() {
  app.listen(PORT, () => console.log('listening on port ', PORT));
}

module.exports = {app, start};