import Server from "./src/index";
import { Boost } from "ada-cloud-util/boost";
import bodyParser from 'koa-bodyparser';

let server = new Server();
server.use(bodyParser());
server.on('configchange', () => {
    let { db } = server.config;
    Boost.updateDatabase(db);
});
server.on('started', () => {
});
server.startup();