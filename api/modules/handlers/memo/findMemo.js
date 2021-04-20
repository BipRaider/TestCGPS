'use strick';

const memoModel = require('../../model/memo.model');

module.exports = async ({ memo }) => {
   try {
      const findMemo = await memoModel.findMemoByID(memo);

      if (!findMemo) {
         const err = new Error(`Is't found memo`);
         err.code = 404;
         throw err;
      }

      return findMemo._id;
   } catch (error) {
      throw error;
   }
};
