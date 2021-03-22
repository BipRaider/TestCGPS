'use strict';

const { Router } = require('express');

const BikeController = require('../controllers/bike.controller');
const BikeValidator = require('../validators/bike.validators');
const userRouter = Router();

userRouter.get('/', BikeValidator.validateBikesHire, BikeController.getListBikesHired);
userRouter.post('/', BikeValidator.validateBike, BikeController.addBike);
userRouter.patch('/', BikeValidator.validateID, BikeController.changeBike);
userRouter.delete('/', BikeValidator.validateID, BikeController.deleteBike);

module.exports = userRouter;
