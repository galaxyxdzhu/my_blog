const Koa = require('koa');

const app = new Koa();

app.use(async (ctx) => {
    ctx.body = {
        key: "hello world"
    }
    
})

app.listen(3000);