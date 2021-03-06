const Koa = require('koa');
const router = require('./routers');
const bodyParser = require('koa-bodyparser');

const middleware = require('./middleware');

const app = new Koa();

app.use(bodyParser());
// app.use(middleware.interceptor);
app.use(async (ctx, next) => {
    const {path} = ctx;
    if (path !== '/login') {
        const {token} = ctx.header;
        if (token) {
            console.log(token);
           next();
        }
    }
})
app.use(router.routes()).use(router.allowedMethods());



const Port = process.env.PORT || 3001;


app.listen(Port, () => {
    console.log(`server start on ${Port}`);
});