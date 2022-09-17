import mongoose from 'mongoose';

const connect = () => {
  mongoose.connect('mongodb://127.0.0.1:27017/test');
  mongoose.connection.once('open', () => {
    console.log('connected to database');
  });
};

const db = {
  connect,
};

export default db;
