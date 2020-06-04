const Router = require('koa-router');
const User = require('./User');

module.exports = function (app) {
  const router = new Router();

  // 用户列表
  router.use('/user', User.routes(), User.allowedMethods());

  app.use(router.routes()).use(router.allowedMethods());
};
