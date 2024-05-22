const mongoose = require("mongoose");

const mongooseConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      dbName: process.env.DB_NAME,
    });
  } catch (error) {
    console.log("Connection FAILED to MongoDB", error.message);
  }
};

module.exports = {
  mongooseConnect,
};
