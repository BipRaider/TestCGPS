'use strict';

const { Router } = require('express');

const MemoController = require('../controllers/memo.controller');
const MemoValidator = require('../validators/memo.validators');
const userRouter = Router();

userRouter.get('/list', MemoController.getListMemos);

userRouter.get('/', MemoController.home);

userRouter.post('/', MemoValidator.validateMemo, MemoController.addMemo, MemoController.home);

userRouter.patch('/', MemoValidator.validateID, MemoController.changeMemo);

userRouter.delete('/', MemoValidator.validateID, MemoController.deleteMemo);

userRouter.get('/add', MemoController.addMemoOnCategoryGet);

userRouter.post('/add', MemoValidator.validateMemoInCategory, MemoController.addMemoOnCategory);

userRouter.get('/get', MemoValidator.validateID, MemoController.aggregateMemoInCategory);

userRouter.delete('/delete', MemoValidator.validateID, MemoController.removeMemoFromCategory);

module.exports = userRouter;
