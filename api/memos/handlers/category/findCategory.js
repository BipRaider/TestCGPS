'use strick';

const categoryModel = require('../../model/category.model');

module.exports = async ({ category }) => {
   try {
      const findCategory = await categoryModel.findCategoryByCategory(category);

      if (!findCategory) {
         const err = new Error(`Is't found memo`);
         err.code = 404;
         throw err;
      }

      return findCategory._id;
   } catch (error) {
      throw error;
   }
};
