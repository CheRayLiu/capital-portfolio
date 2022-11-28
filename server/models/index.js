const dbConfig = require('../config/db.config.js');
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const autoIncrement = require('mongoose-auto-increment');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

const connection = mongoose.createConnection(db.url);
autoIncrement.initialize(connection);

db.portfolioCompany = require('./portfolioCompany.model.js')(
  mongoose,
  mongoosePaginate,
  autoIncrement
);

module.exports = db;
