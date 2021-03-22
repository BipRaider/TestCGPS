'use strict';

const { addMemo, changeMemo, deleteMemo, getListCategory } = require('../models');

module.exports = class MemoController {
   static async getListCategory(req, res, next) {
      try {
         const list = await getListCategory();

         return res.status(200).render('listCategory.hbs', { memos: [...list] });
      } catch (error) {
         next(error);
      }
   }

   static async home(req, res, next) {
      try {
         const list = await getListCategory();

         return res.status(200).render('addMemo.hbs');
      } catch (error) {
         next(error);
      }
   }

   static async addMemo(req, res, next) {
      try {
         const { year, month, day, title, memo } = req.body;

         const newTime = `${day} ${month} ${year}`;

         const time = new Date(newTime);

         const newMemo = await addMemo(req.body, time);
         req.body = '';
         return res.status(201).render('newMemo.hbs', { title, memo, time });
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
};
