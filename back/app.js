const Koa = require('koa');
const router = require('./routers');
const bodyParser = require('koa-bodyparser');

const middleware = require('./middleware');

const app = new Koa();

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());
app.use(middleware.interceptor());

const Port = process.env.PORT || 3001;

app.listen(Port, () => {
    console.log(`server start on ${Port}`);
});