const config =require('../config');
const jwt = require('jsonwebtoken');

const allowPath = ['/login'];

module.exports = {
    interceptor(ctx, next) {
        const path = ctx.path;
        if (allowPath.indexOf(path) === -1) {
            const {token} = ctx.header;
            if (token) {
                const data = jwt.verify(token, config.jwt.secret);
                console.log(data);
                if (data) {
                    next();
                } else {
                    ctx.redirect('/login')
                }
            } else {
                ctx.body = {
                    message: '登录时效，重新登录',
                    status: false
                }
                ctx.redirect('/login')
            }

        }
        next();
    }
}