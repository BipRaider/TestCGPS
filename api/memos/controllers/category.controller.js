'use strict';

const { addCategory, deleteCategory, getListCategory } = require('../handlers/category');

module.exports = class CategoryController {
   static async getListCategory(req, res, next) {
      try {
         const list = await getListCategory();

         return res.status(200).render('listCategory.hbs', { category: [...list] });
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
