const Server = require("./src/index");
const { Boost } = require("ada-cloud-util/boost");
const bodyParser = require('koa-bodyparser');

let server = new Server();
server.use(bodyParser());
server.on('configchange', () => {
    let { db } = server.config;
    Boost.updateDatabase(db);
});
server.on('started', () => {
});
server.startup();