const db = require('../../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config');

const router = (router) => {
    /**
     * 登录
     */
    router.post('/login', async (ctx, next) => {
        const { username, password } = ctx.request.body;
        const user = await db.getUser(username);
        if (user.length === 0) {
            ctx.body = {
                message: '用户名不存在',
                status: false
            }
            next();
        } else {
            const {password: hashPassword} = user[0];
            const status = bcrypt.compareSync(password, hashPassword);

            if (!status) {
                ctx.body = {
                    message: '密码错误',
                    status:  false
                }
            } else {
                // 创建token
                const token = jwt.sign({name: 'galaxyxd'}, config.jwt.secret, {expiresIn: config.jwt.expire});

                ctx.body = {
                    message: '登录成功',
                    status: true,
                    token
                }
                
            }
            next();
        }
    })


    /**
     * 注册
     */
    router.post('/register', async ctx => {
        const { username, password } = await ctx.request.body;
        const hasUsername = await db.hasUsername(username);

        
        if (hasUsername.length == 0) {
            const salt = await bcrypt.genSaltSync(10);
            const hashPassword = await bcrypt.hashSync(password, salt);
            
            await db.registerUser({ username, password: hashPassword });
            ctx.body = {
                status: true,
                message: '注册成功'
            }
        } else {
            ctx.body = {
                status: false,
                message: '用户名已注册'
            }
        }
    })


    router.get('/userinfo', async (ctx, next) => {
        ctx.body = {
            status: true,
        }
        next();
    })
}


module.exports = router;