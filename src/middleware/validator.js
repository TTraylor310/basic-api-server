'use strict';

const serverError = require('../error-handlers/500');


const validator = async (req, res, next) => {
  // if(req.originalUrl === '/food' ||)
  let {content} = await req.body;
  console.log('this is the infos:', content);

  try {
    if (content) {
      next();
    }else {
      serverError();
    }
  } catch (error) {
    next(error.message);
  }
};

module.exports = validator;
