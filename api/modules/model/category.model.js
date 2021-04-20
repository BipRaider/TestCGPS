'use strict';

const mongoose = require('mongoose');
const {
   Schema,
   Types: { ObjectId },
} = mongoose;

const categorySchema = new Schema({
   category: { type: String, required: true, default: 'all' },
   memos: [{ type: ObjectId, ref: 'memo' }],
});

categorySchema.statics.getCategory = getCategory;
categorySchema.statics.findCategoryByID = findCategoryByID;
categorySchema.statics.removeCategory = removeCategory;
categorySchema.statics.findData = findData;
categorySchema.statics.findCategoryByCategory = findCategoryByCategory;

async function getCategory() {
   return await this.find();
}

async function findCategoryByID(_id) {
   return await this.findOne({ _id });
}
async function findCategoryByCategory(value) {
   return await this.findOne({ category: value });
}
async function removeCategory(_id) {
   return await this.deleteOne({ _id });
}

async function findData(name, value) {
   return await this.find({ [name]: value });
}

const categoryModel = mongoose.models.category || mongoose.model('category', categorySchema);

module.exports = categoryModel;
