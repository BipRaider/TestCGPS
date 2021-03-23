'use strict';

const { Router } = require('express');

const CategoryController = require('../controllers/category.controller');
const CategoryValidator = require('../validators/category.validators');
const userRouter = Router();

userRouter.get('/list', CategoryController.getListCategory);

userRouter.get('/', CategoryController.home);
userRouter.post(
   '/',
   CategoryValidator.validateCategory,
   CategoryController.addCategory,
   CategoryController.home,
);

userRouter.delete('/', CategoryValidator.validateID, CategoryController.deleteCategory);

module.exports = userRouter;
