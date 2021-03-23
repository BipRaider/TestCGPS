'use strict';

const EventEmitter = require('events');

const {
   addMemo,
   changeMemo,
   deleteMemo,
   getListMemos,
   removeMemoFromCategory,
   addMemoOnCategory,
   aggregateMemoInCategory,
} = require('../handlers/memo');

const findId = require('../handlers/findId');

module.exports = class MemoController extends EventEmitter {
   static async getListMemos(req, res, next) {
      try {
         const list = await getListMemos();

         return res.status(200).render('listMemos.hbs', { memos: [...list] });
      } catch (error) {
         next(error);
      }
   }

   static async home(req, res, next) {
      try {
         if (req.newMemo) {
            const newMemo = req.newMemo;

            return res.status(201).render('addMemo.hbs', { newMemo, addedMemo: true });
         }

         return res.status(200).render('addMemo.hbs');
      } catch (error) {
         next(error);
      }
   }

   static async addMemo(req, res, next) {
      try {
         const { year, month, day, title, memo } = req.body;

         const newTime = `${day} ${month} ${year}`;

         const time = new Date(newTime).toUTCString();

         await addMemo(req.body, time);

         req.body = '';
         req.newMemo = { title, memo, time };
         res.status(201);

         next();
      } catch (error) {
         next(error);
      }
   }

   static async changeMemo(req, res, next) {
      try {
         const memo = await changeMemo(req.body);

         return res.status(201).json(memo);
      } catch (error) {
         next(error);
      }
   }

   static async deleteMemo(req, res, next) {
      try {
         (await req.body) === undefined ? deleteMemo(req.query) : deleteMemo(req.body);

         return res.status(201).end();
      } catch (error) {
         next(error);
      }
   }

   static async addMemoOnCategoryGet(req, res, next) {
      try {
         return res.status(200).render('addMemoInCategory.hbs');
      } catch (error) {
         next(error);
      }
   }

   static async addMemoOnCategory(req, res, next) {
      try {
         const { categoryId, memoId } = await findId(req.body);

         await addMemoOnCategory(categoryId, memoId);

         return await res.status(201).render('addMemoInCategory.hbs');
      } catch (error) {
         next(error);
      }
   }

   static async removeMemoFromCategory(req, res, next) {
      try {
         const memoId = req.params.id;
         const categoryID = req.category.id;

         await removeMemoFromCategory(memoId, categoryID);

         return await res.status(200).end();
      } catch (error) {
         next(error);
      }
   }
   static async aggregateMemoInCategory(req, res, next) {
      try {
         const memoId = req.params.id;

         const memoInCategory = await aggregateMemoInCategory(memoId);

         return await res.status(200).send(memoInCategory);
      } catch (error) {
         next(error);
      }
   }
};
