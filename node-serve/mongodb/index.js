const mongoose = require('mongoose');
const config = require('../config');

const chalk = require('chalk');

module.exports = function () {
  mongoose.connect(config.mongodbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = mongoose.connection;
  db.once('open', () => {
    console.log(chalk.green('连接数据库成功'));
  });
  db.on('error', function (error) {
    console.error(chalk.red('Error in MongoDb connection: ' + error));
    mongoose.disconnect();
  });
  db.on('close', function () {
    console.log(chalk.red('数据库断开，重新连接数据库'));
    mongoose.connect(config.mongodbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      server: { auto_reconnect: true }
    });
  });
};
