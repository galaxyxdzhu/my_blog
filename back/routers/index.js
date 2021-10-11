const Router = require('koa-router');
const router = new Router();

const userRouter = require('./front/user');



userRouter(router);




module.exports = router;