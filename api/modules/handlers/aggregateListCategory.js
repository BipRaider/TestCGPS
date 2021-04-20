'use strict';

const { aggregateMemoInCategory } = require('./memo');

module.exports = async list => {
   const fn = async ({ category }) => {
      const text = await aggregateMemoInCategory(category);
      return text;
   };

   const newList = await list.map(value => fn(value));

   let categoryList = [];

   for await (const doc of newList) {
      categoryList.push(...doc);
   }
   return categoryList;
};
