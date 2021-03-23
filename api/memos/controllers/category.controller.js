'use strict';

const { addCategory, deleteCategory, getListCategory } = require('../handlers/category');
const { aggregateMemoInCategory } = require('../handlers/memo');

const fn = async ({ category }) => {
   const text = await aggregateMemoInCategory(category);
   return text;
};
module.exports = class CategoryController {
   static async getListCategory(req, res, next) {
      try {
         const list = await getListCategory();

         const newList = await list.map(value => fn(value));

         let categoryList = [];

         for await (const doc of newList) {
            categoryList.push(...doc);
         }

         return res.status(200).render('listCategory.hbs', {
            category: { ...categoryList },
         });
      } catch (error) {
         next(error);
      }
   }

   static async home(req, res, next) {
      try {
         if (req.newCategory) {
            const newCategory = req.newCategory;

            return res.status(201).render('addCategory.hbs', { newCategory, addedCategory: true });
         }

         return res.status(200).render('addCategory.hbs');
      } catch (error) {
         next(error);
      }
   }

   static async addCategory(req, res, next) {
      try {
         const { category } = req.body;

         await addCategory(req.body);

         req.body = '';
         req.newCategory = { category };
         res.status(201);

         next();
      } catch (error) {
         next(error);
      }
   }

   static async deleteCategory(req, res, next) {
      try {
         await deleteCategory(req.body.id);

         return res.status(201).end();
      } catch (error) {
         next(error);
      }
   }
};
