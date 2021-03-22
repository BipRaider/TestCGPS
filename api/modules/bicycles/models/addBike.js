'use strict';

const bikeModel = require('../data/bike.model');

module.exports = async data => {
   try {
      if (data.name === undefined) {
         const err = new Error('You could not register your bike');
         err.code = 409;
         throw err;
      }

      const newBike = await bikeModel.create({
         ...data,
      });

      return {
         massages: `Your bike ${newBike._doc.name} added register `,
         bike: { ...newBike._doc },
      };
   } catch (error) {
      throw error;
   }
};
