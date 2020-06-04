const path = require('path');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const static = require('koa-static');

const config = require('./config');
const router = require('./routers');
const mongodb = require('./mongodb');

const app = new Koa();

// 使用ctx.body解析中间件
app.use(bodyParser());
// 静态资源路径
app.use(static(path.join(__dirname, './public')));
// 连接数据库
mongodb();
// 注册路由
router(app);

// 开启服务器
app.listen(config.port, () => {
  console.log('后台服务器启动：http://localhost:' + config.port);
});
