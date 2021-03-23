'use strick';

const categoryModel = require('../../model/category.model');

module.exports = async ({ id }) => {
   try {
      const category = await categoryModel.findCategoryByID(id);

      if (!category) {
         const err = new Error(`Is't found category`);
         err.code = 404;
         throw err;
      }

      await categoryModel.removeCategory(id);
   } catch (error) {
      throw error;
   }
};
