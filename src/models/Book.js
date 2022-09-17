import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const bookSchame = new Schema({
  name: String,
  page: Number,
  authorID: String,
});

export const model = mongoose.model('Book', bookSchame);
