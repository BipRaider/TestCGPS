'use strict';

const path = require('path');

try {
  require('dotenv').config({ path: path.join(__dirname, '../../.env') });
} catch (error) {
  const err = new Error('Dotenv error');
  err.code = 500;
  throw err;
}

const { MONGODB_URL, PORT, CORS_URL } = process.env;

module.exports = {
  corsUrl: CORS_URL,
  mongodbUrl: MONGODB_URL,
  port: PORT || 3100,
};
