'use strict';

const Joi = require('joi');

const { checkedId } = require('../../helpers');

module.exports = class ValidatorMemo {
   static validateMemo(req, res, next) {
      const validationMemo = Joi.object({
         title: Joi.string().required(),
         memo: Joi.string().required(),
         year: Joi.string().required(),
         day: Joi.string().required(),
         month: Joi.string().required(),
      });

      const val = validationMemo.validate(req.body);

      if (val.error) {
         const err = new Error('Invalid request body');
         err.code = 400;
         throw err;
      }
      next();
   }

   static validateChangeMemo(req, res, next) {
      const validationMemo = Joi.object({
         memo: Joi.string().required(),
      });

      const val = validationMemo.validate(req.body);

      if (val.error) {
         const err = new Error('Invalid request body');
         err.code = 400;
         throw err;
      }

      next();
   }

   static validateID(req, res, next) {
      const validationMemo = Joi.object({
         id: Joi.string().required(),
      });

      const val = validationMemo.validate(req.params);

      if (val.error) {
         const err = new Error('Invalid request body');
         err.code = 400;
         throw err;
      }

      checkedId(val.value.id);
      next();
   }

   static validateMemoInCategory(req, res, next) {
      const validationMemo = Joi.object({
         category: Joi.string().required(),
         memo: Joi.string().required(),
      });

      const val = validationMemo.validate(req.body);

      if (val.error) {
         const err = new Error('Invalid request body');
         err.code = 400;
         throw err;
      }

      next();
   }
};
