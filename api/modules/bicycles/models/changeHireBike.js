'use strick';

const bikeModel = require('../data/bike.model');

module.exports = async ({ id }) => {
   try {
      const findBike = await bikeModel.findBikeByID(id);

      if (!findBike) {
         const err = new Error(`Is't found bike`);
         err.code = 404;
         throw err;
      }

      const { _doc } = findBike;

      const bike = await bikeModel.updateBikeHire(id, !_doc.hire);

      return { hire: bike._doc.hire, id: id };
   } catch (error) {
      throw error;
   }
};
