const Router = require("koa-router");
const Result=require("ada-cloud-util/result");
const router = new Router();

router.get('/get', ({ Service, response }) => {
    return Service.getService("testService").test().then(() => {
        response.body = 'template-service-name';
    }).catch(() => {
        response.body = Result.getErrorResult().getResponseData();
    });
});

module.exports = router;