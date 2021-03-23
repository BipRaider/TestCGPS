'use strick';
const categoryModel = require('../../model/category.model');

module.exports = async (categoryId, memoId) => {
   try {
      return await categoryModel
         .findByIdAndUpdate(
            categoryId,
            {
               $pull: { memos: memoId },
            },
            { new: true },
         )
         .populate('memos');
   } catch (error) {
      throw error;
   }
};
