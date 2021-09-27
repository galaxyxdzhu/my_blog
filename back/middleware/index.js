const allowPath = ['/login'];
const {hasUser} = require('../db');

module.exports = {
    interceptor() {
        return async(ctx, next) => {
            const path = ctx.path;
            if (allowPath.indexOf(path) === -1) {
                const cookie = ctx.cookies.get('username');
                if (cookie) {
                    const results = await hasUser(cookie);
                    if (results && results.length) {
                        console.log('success login');
                    }
                }
            }
            next();
        }
    }
}