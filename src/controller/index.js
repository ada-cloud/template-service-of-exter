const { Controller } = require("ada-cloud-util/boost");

class TextController extends Controller {
    static configure() {
        return {
            basePath: "",
            actions: {
                get: { path: "/get", method: 'get' }
            },
            service: 'userService'
        }
    }

    get() {
        return this.userService.test();
    }
}

module.exports = TextController;