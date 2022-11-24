const { mongoose } = require('../models');
const db = require('../models');

const initDBConnection = async (callback) => {
  db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.connection.on('error', function (err) {
    console.error('Failed to connect to database');
    process.exit(1);
  });

  mongoose.connection.once('open', function () {
    console.log('Connected to database');
    callback();
  });
};

module.exports = { initDBConnection };
