'use strick';

const bikeModel = require('../data/bike.model');

module.exports = async ({ id }) => {
   try {
      const bike = await bikeModel.findBikeByID(id);

      if (!bike) {
         const err = new Error(`Is't found bike`);
         err.code = 404;
         throw err;
      }

      await bikeModel.removeBike(id);
   } catch (error) {
      throw error;
   }
};
