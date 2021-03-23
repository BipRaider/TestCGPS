'use strick';

const categoryModel = require('../../model/category.model');

module.exports = async () => {
   try {
      const listCategory = await categoryModel.getCategory();

      return listCategory.map(value => value._doc);
   } catch (error) {
      throw error;
   }
};
