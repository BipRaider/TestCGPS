'use strick';

const { findMemo } = require('./memo');
const { findCategory } = require('./category');

module.exports = async data => {
   try {
      const findMemoId = await findMemo(data);

      const findCategoryId = await findCategory(data);

      return { memoId: findMemoId, categoryId: findCategoryId };
   } catch (error) {
      throw error;
   }
};
