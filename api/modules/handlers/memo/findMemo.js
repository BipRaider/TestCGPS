'use strick';

const memoModel = require('../../model/memo.model');

module.exports = async ({ memo, id }) => {
   try {
      let findMemo;
      if (id) {
         findMemo = await memoModel.findMemoByID(id);
         return findMemo._doc;
      } else {
         findMemo = await memoModel.findMemoByID(memo);
      }

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
