'use strick';

const memoModel = require('../../model/memo.model');

module.exports = async data => {
   try {
      console.dir(data);
      const findMemo = await memoModel.findMemoByID(data.id);

      if (!findMemo) {
         const err = new Error(`Is't found memo`);
         err.code = 404;
         throw err;
      }
      console.dir(data);

      await memoModel.updateMemo(data);
   } catch (error) {
      throw error;
   }
};
