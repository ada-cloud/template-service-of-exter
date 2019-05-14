const Path = require("path");
const Server = require("./src/index");
const { Boost, Service } = require("ada-cloud-util/boost");

let server = new Server();
server.on('configchange', () => {
    let { db } = server.config;
    Boost.updateDatabase(db);
});
server.on('started', () => {
});
server.startup(({ context, config }) => {
    context.Service = Service;
    return Boost.boot({
        source: Path.relative(__dirname, "./src"),
        database: config.db,
        koa: server
    });
});