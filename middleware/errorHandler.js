// middleware/errorHandler.js

const path = require('path');

exports.notFoundHandler = (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, '../public/404.html'));
};

exports.errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).sendFile(path.join(__dirname, '../public/500.html'));
};