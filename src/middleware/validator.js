'use strict';

const validator = (req, res, next) => {
  console.log('Validator Request: ${req}');
};

module.exports = validator;
