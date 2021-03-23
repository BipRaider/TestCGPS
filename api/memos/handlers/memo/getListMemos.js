'use strick';

const memoModel = require('../../model/memo.model');

module.exports = async () => {
   try {
      const listMemos = await memoModel.getMemos();

      return listMemos.map(value => value._doc);
   } catch (error) {
      throw error;
   }
};
