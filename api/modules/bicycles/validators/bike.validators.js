'use strict';

const Joi = require('joi');

const { checkedId } = require('../../../helpers');

module.exports = class ValidatorBike {
   static validateBike(req, res, next) {
      const validationRules = Joi.object({
         name: Joi.string().required(),
         typeBike: Joi.string().required(),
         rent: Joi.number().required(),
      });

      const val = validationRules.validate(req.body);

      if (val.error) {
         const err = new Error('Invalid request body');
         err.code = 400;
         throw err;
      }
      next();
   }

   static validateBikesHire(req, res, next) {
      const validationRules = Joi.object({
         hire: Joi.boolean().required(),
      });

      const val = validationRules.validate(req.query);

      if (val.error) {
         const err = new Error('Invalid request body');
         err.code = 400;
         throw err;
      }

      next();
   }

   static validateID(req, res, next) {
      const validationRules = Joi.object({
         id: Joi.string().required(),
      });

      const val =
         req.body.id === undefined
            ? validationRules.validate(req.query)
            : validationRules.validate(req.body);

      if (val.error) {
         const err = new Error('Invalid request body');
         err.code = 400;
         throw err;
      }

      checkedId(val.value.id);
      next();
   }
};
