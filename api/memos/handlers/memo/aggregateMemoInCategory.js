'use strick';
const categoryModel = require('../../model/category.model');

module.exports = async (categoryId, memoDB, localName, foreignName) => {
   try {
      return await categoryModel.aggregate([
         {
            $match: { _id: categoryId },
         },
         {
            $lookup: {
               from: memoDB || 'memos',
               localField: localName || 'memos',
               foreignField: foreignName || '_id',
               as: memoDB || 'memos',
            },
         },
         {
            $unset: ['memos'],
         },
      ]);
   } catch (error) {
      throw error;
   }
};
