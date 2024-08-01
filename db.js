const mongoose = require('mongoose');

const dbconnect = async() => {
    await mongoose.connect('mongodb://localhost:27017/node');
    console.log("Connected to MongoDB/DB");
};

module.exports = dbconnect;