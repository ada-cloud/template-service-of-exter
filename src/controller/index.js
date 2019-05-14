const { Controller } = require("ada-cloud-util/boost");

class TextController extends Controller {
    static configure() {
        return {
            basePath: "",
            actions: {
                get: { path: "/get", method: 'get' }
            }
        }
    }

    get({ Service }) {
        return Service.getService("testService").test();
    }
}

module.exports = TextController;