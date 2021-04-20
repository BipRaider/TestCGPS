'use strick';

const memoModel = require('../../model/memo.model');

module.exports = async ({ id }) => {
   try {
      const memo = await memoModel.findMemoByID(id);

      if (!memo) {
         const err = new Error(`Is't found memo`);
         err.code = 404;
         throw err;
      }

      await memoModel.removeMemo(id);
   } catch (error) {
      throw error;
   }
};
