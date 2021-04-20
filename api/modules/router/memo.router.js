'use strict';

const { Router } = require('express');

const MemoController = require('../controllers/memo.controller');
const MemoValidator = require('../validators/memo.validators');
const userRouter = Router();

userRouter.get('/memo', MemoController.memoPage);
userRouter.post(
   '/memo',
   MemoValidator.validateMemo,
   MemoController.addMemo,
   MemoController.memoPage,
);

userRouter.get('/memo/list', MemoController.getListMemos);
userRouter.post('/memo/delete/:id', MemoValidator.validateID, MemoController.deleteMemo);

userRouter.get('/memo/change/:id', MemoValidator.validateID, MemoController.changeMemoPage);

userRouter.post('/memo/change/:id', MemoValidator.validateID, MemoController.changeMemo);

userRouter.get('/add', MemoController.addMemoOnCategoryGet);

userRouter.post('/add', MemoValidator.validateMemoInCategory, MemoController.addMemoOnCategory);

userRouter.delete('/delete/:id', MemoValidator.validateID, MemoController.removeMemoFromCategory);

module.exports = userRouter;
