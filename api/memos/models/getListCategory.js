'use strick';

const memoModel = require('../data/memo.model');

module.exports = async () => {
   try {
      const listCategory = await memoModel.getMemos();

      return listCategory.map(value => value._doc);
   } catch (error) {
      throw error;
   }
};
