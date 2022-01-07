const express = require('express');

const productController = require('./productController');
const categoryController = require('./categoryController');
const userController = require('./userController');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productController);
  router.use('/categories', categoryController);
  router.use('/users', userController);
}

module.exports = routerApi;
