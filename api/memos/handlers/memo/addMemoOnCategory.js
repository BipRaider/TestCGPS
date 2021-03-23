'use strick';
const categoryModel = require('../../model/category.model');

module.exports = async (categoryId, memoId) => {
   try {
      await categoryModel.findByIdAndUpdate(
         categoryId,
         {
            $push: { memos: memoId },
         },
         { new: true },
      );
   } catch (error) {
      throw error;
   }
};
