import { Boost } from "ada-cloud-util/boost";
import bodyParser from 'koa-bodyparser';
import CloudApp from "ada-cloud-hub/boot";

class Server extends CloudApp {
    getRemoteConfigInfo(service) {
        return service.get('/cloud-config-service/get', {
            path: 'user-db.json'
        }).then(a => {
            return {
                db: JSON.parse(a).data
            };
        });
    }

    getDatabaseOption() {
        return this.config.db;
    }
}

let server = new Server();
server.use(bodyParser());
server.on('configchange', () => {
    let { db } = server.config;
    Boost.updateDatabase(db);
});
server.on('started', () => {
});
server.startup();