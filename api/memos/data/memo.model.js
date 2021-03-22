'use strict';

const mongoose = require('mongoose');
const { Schema } = mongoose;

const memoSchema = new Schema({
   title: { type: String, required: true },
   memo: { type: String, required: true, default: '' },
   time: { type: Date, required: true, default: Date.now() },
});

memoSchema.statics.getMemos = getMemos;
memoSchema.statics.updateMemo = updateMemo;
memoSchema.statics.findMemoByID = findMemoByID;
memoSchema.statics.removeMemo = removeMemo;
memoSchema.statics.findData = findData;

async function getMemos() {
   return await this.find();
}

async function findMemoByID(_id) {
   return await this.findOne({ _id });
}

async function updateMemo(id, category) {
   return await this.findByIdAndUpdate(id, { category }, { new: true });
}

async function removeMemo(_id) {
   return await this.deleteOne({ _id });
}

async function findData(name, value) {
   return await this.find({ [name]: value });
}

const memoModel = mongoose.models.memos || mongoose.model('memos', memoSchema);

module.exports = memoModel;
