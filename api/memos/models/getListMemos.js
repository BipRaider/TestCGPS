'use strick';

const memoModel = require('../data/memo.model');

module.exports = async ({ category }) => {
   try {
      const listBikes = await memoModel.findData('category', category);

      return listBikes;
   } catch (error) {
      throw error;
   }
};
