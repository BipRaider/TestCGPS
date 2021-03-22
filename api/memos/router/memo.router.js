'use strict';

const { Router } = require('express');

const MemoController = require('../controllers/memo.controller');
const MemoValidator = require('../validators/memo.validators');
const userRouter = Router();

userRouter.get('/category', MemoController.getListCategory);

userRouter.get('/', MemoController.home);
userRouter.post('/', MemoValidator.validateMemo, MemoController.addMemo);

userRouter.patch('/', MemoValidator.validateID, MemoController.changeMemo);
userRouter.delete('/', MemoValidator.validateID, MemoController.deleteMemo);

module.exports = userRouter;
