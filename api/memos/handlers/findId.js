'use strick';

const { findMemoByTitle } = require('./memo');
const { findCategory } = require('./category');

module.exports = async data => {
   try {
      const findMemoId = await findMemoByTitle(data);

      const findCategoryId = await findCategory(data);

      console.log('>>> memo :', findMemoId);
      console.log('>>> category :', findCategoryId);

      return { memoId: findMemoId, categoryId: findCategoryId };
   } catch (error) {
      throw error;
   }
};
