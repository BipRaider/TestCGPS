'use strict';

const {
   addMemo,
   changeMemo,
   deleteMemo,
   getListMemos,
   removeMemoFromCategory,
   addMemoOnCategory,
   aggregateMemoInCategory,
   findMemo,
} = require('../handlers/memo');

const { getListCategory } = require('../handlers/category');

const findId = require('../handlers/findId');

module.exports = class MemoController {
   static async getListMemos(req, res, next) {
      try {
         const list = await getListMemos();

         return res.status(200).render('listMemos.hbs', { memos: [...list] });
      } catch (error) {
         next(error);
      }
   }

   static async memoPage(req, res, next) {
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
         const { year, month, day } = req.body;

         const newTime = `${day} ${month} ${year}`;

         const time = new Date(newTime).toUTCString();

         const newMemos = await addMemo(req.body, time);

         const {
            memo: { memo, title, _id: id },
            massages,
         } = newMemos;

         req.body = '';
         req.newMemo = { memo, title, massages, time, id };

         res.status(201);

         next();
      } catch (error) {
         next(error);
      }
   }

   static async changeMemoPage(req, res, next) {
      try {
         const { time, memo, title, _id: id } = await findMemo(req.params);

         const times = {
            year: time.getUTCFullYear(),
            day: time.getUTCDate(),
            month: time.getUTCMonth() + 1,
         };

         return res.status(201).render('changeMemo.hbs', { ...times, memo, title, id });
      } catch (error) {
         next(error);
      }
   }

   static async changeMemo(req, res, next) {
      try {
         const newMemo = { ...req.body, id: req.params.id };

         await changeMemo(newMemo);

         return res.status(201).redirect('/memo/list');
      } catch (error) {
         next(error);
      }
   }

   static async deleteMemo(req, res, next) {
      try {
         await deleteMemo(req.params);

         return res.status(201).redirect('/memo/list');
      } catch (error) {
         next(error);
      }
   }

   static async addMemoOnCategoryGet(req, res, next) {
      try {
         const listMemo = await getListMemos();
         const listCategory = await getListCategory();

         return res.status(200).render('addMemoInCategory.hbs', {
            memos: [...listMemo],
            categorys: [...listCategory],
         });
      } catch (error) {
         next(error);
      }
   }

   static async addMemoOnCategory(req, res, next) {
      try {
         const { categoryId, memoId } = await findId(req.body);

         await addMemoOnCategory(categoryId, memoId);

         return await res.status(201).redirect('/add');
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
