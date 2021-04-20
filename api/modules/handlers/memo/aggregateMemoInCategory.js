'use strick';
const categoryModel = require('../../model/category.model');

module.exports = async (categoryName, memoDB, localName, foreignName) => {
   try {
      return await categoryModel
         .aggregate([
            {
               $match: { category: categoryName },
            },
            {
               $lookup: {
                  from: memoDB || 'memos',
                  localField: localName || 'memos',
                  foreignField: foreignName || '_id',
                  as: memoDB || 'memos',
               },
            },
         ])
         .sort({ memos: 1 });
   } catch (error) {
      throw error;
   }
};
