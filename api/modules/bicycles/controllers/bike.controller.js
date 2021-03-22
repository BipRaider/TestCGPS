'use strict';

const { addBike, changeHireBike, deleteBike, getListBikesHired } = require('../models');

module.exports = class BikeController {
   static async getListBikesHired(req, res, next) {
      try {
         const listBikesHire = await getListBikesHired(req.query);

         return res.status(200).json(listBikesHire);
      } catch (error) {
         next(error);
      }
   }

   static async addBike(req, res, next) {
      try {
         const bike = await addBike(req.body);

         return res.status(201).json(bike);
      } catch (error) {
         next(error);
      }
   }

   static async changeBike(req, res, next) {
      try {
         const bike = await changeHireBike(req.body);

         return res.status(201).json(bike);
      } catch (error) {
         next(error);
      }
   }

   static async deleteBike(req, res, next) {
      try {
         await deleteBike(req.query);

         return res.status(201).end();
      } catch (error) {
         next(error);
      }
   }
};
