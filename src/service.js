import CloudApp from "ada-cloud-hub/boot";

class Service extends CloudApp {
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

export default Service;