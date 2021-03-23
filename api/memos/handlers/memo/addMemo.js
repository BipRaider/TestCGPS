'use strict';

const memoModel = require('../../model/Memo.model');

module.exports = async (data, time) => {
   try {
      if (data.title === undefined) {
         const err = new Error('You could not register your memo');
         err.code = 409;
         throw err;
      }

      const newMemo = await memoModel.create({
         ...data,
         time,
      });

      return {
         massages: `Your memo ${newMemo._doc.title}  register `,
         memo: { ...newMemo._doc },
      };
   } catch (error) {
      throw error;
   }
};
