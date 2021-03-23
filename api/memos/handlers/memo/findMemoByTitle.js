'use strick';

const memoModel = require('../../model/memo.model');

module.exports = async ({ title }) => {
   try {
      const findMemo = await memoModel.findMemoByTitle(title);

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
