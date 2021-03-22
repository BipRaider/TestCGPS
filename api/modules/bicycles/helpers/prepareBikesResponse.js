'use strick';

module.exports = bakes => {
   return bakes.map(({ name, time, rent, typeBike, _id, hire }) => {
      return {
         name,
         time,
         rent,
         typeBike,
         hire,
         id: _id,
      };
   });
};
