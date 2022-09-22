'use strict';

module.exports = (req, res, next) => {
  res.status(400).send({
    error: 404,
    route: req.baseUrl,
    message: 'Not Found',
  });
};
