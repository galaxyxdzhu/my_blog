const Router = require('koa-router');
const router = new Router();
const {getUsers, hasUser} = require('../db/index');


router.get('/', async ctx => {
    ctx.cookies.set('username', 'galaxyxd');
    ctx.body = {
        message: 'hello world'
    }
})

// 登录
router.post('/login', async (ctx)=> {
    const {body} = ctx.request;
    console.log(body);
    // if (body) {
    //     const {username, password} = body;
    //     ctx.set('Headers', {cookie: 'hhh=ssss'})
    // }
    ctx.set('Headers', {cookie: 'hhh=ssss'})
    ctx.body = {
        message: 'hhha'
    }
})

module.exports = router;