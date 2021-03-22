'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

const bikeSchema = new Schema({
   name: { type: String, required: true },
   rent: { type: Number, required: true, default: 0 },
   time: { type: Date, default: Date.now() },
   hire: { type: Boolean, required: true, default: false },
   typeBike: {
      type: String,
      enum: [
         'travel',
         'city',
         'mountain',
         'road',
         'touring',
         'hybrid',
         'BMX',
         'unicycles',
         'tandems',
         'cruisers',
         'exotic',
      ],
      default: 'travel',
   },
});

bikeSchema.statics.getBikes = getBikes;
bikeSchema.statics.updateBikeHire = updateBikeHire;
bikeSchema.statics.findBikeByID = findBikeByID;
bikeSchema.statics.removeBike = removeBike;
bikeSchema.statics.findData = findData;

async function getBikes() {
   return await this.find();
}

async function findBikeByID(_id) {
   return await this.findOne({ _id });
}

async function updateBikeHire(id, hire) {
   return await this.findByIdAndUpdate(id, { hire }, { new: true });
}

async function removeBike(_id) {
   return await this.deleteOne({ _id });
}

async function findData(name, value) {
   return await this.find({ [name]: value });
}

const bikeModel = mongoose.model('Bike', bikeSchema);

module.exports = bikeModel;
