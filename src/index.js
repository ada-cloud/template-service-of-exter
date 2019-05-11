const CloudApp = require("ada-cloud-boot");

class Server extends CloudApp {
    getRemoteConfigInfo(service) {
        let target = this.config.configPath;
        return service.get('/cloud-config-service/get', {
            path: target
        }).then(a => {
            return a;
        });;
    }
}

module.exports = Server;