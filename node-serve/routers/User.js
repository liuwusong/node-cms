const Router = require('koa-router');
const { getUser } = require('../controllers/User');
const User = new Router();

User.get('/', getUser);

module.exports = User;
