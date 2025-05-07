const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/facultyDB");
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('DB connection error:', error);
    throw error;
  }
};

module.exports = connectDB;
