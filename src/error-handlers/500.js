'use strict';

module.exports = (err, req, res, next) => {
  console.log('500 error: ', err);
  res.status(500).send({
    error: 500,
    route: req.path,
    query: req.query,
    body: req.body,
    message: typeof(error) === 'string' 
      ? err
      : `ServerError: ${err.message}`,
  });
  next();
};
