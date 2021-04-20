'use strick';

const memoModel = require('../../model/memo.model');

module.exports = async () => {
   try {
      const listMemos = await memoModel.getMemos();

      return listMemos.map(({ _doc: { memo, time, _id, title } }) => {
         return { memo, time, id: _id, title };
      });
   } catch (error) {
      throw error;
   }
};
