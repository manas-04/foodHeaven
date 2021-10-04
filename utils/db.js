const mongoose = require('mongoose');

const mongoDB = process.env.DB_URL ;
const db = mongoose.connect(mongoDB, { useNewUrlParser: true });

module.exports = db;