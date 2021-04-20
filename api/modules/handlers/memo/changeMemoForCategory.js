'use strick';

const memoModel = require('../../model/memo.model');

module.exports = async ({ id, category }) => {
   try {
      const findMemo = await memoModel.findMemoByID(id);

      if (!findMemo) {
         const err = new Error(`Is't found memo`);
         err.code = 404;
         throw err;
      }

      const memo = await memoModel.updateMemo(id, category);

      return { memo: memo._doc, id: id };
   } catch (error) {
      throw error;
   }
};
