'use strict';

const categoryModel = require('../../model/category.model');

module.exports = async data => {
   try {
      if (data.category === undefined) {
         const err = new Error('You could not register your category');
         err.code = 409;
         throw err;
      }

      const newCategory = await categoryModel.create({
         ...data,
      });

      return {
         massages: `Your memo ${newCategory._doc.category}  register `,
         memo: { ...newCategory._doc },
      };
   } catch (error) {
      throw error;
   }
};
