const { Service } = require("ada-cloud-util/boost");
const UserModel = require("../model/user");

class TestService extends Service {
    static configure() {
        return {
            name: "userService",
            dao: 'mysql',
            methods: {
                test: { transaction: false }
            }
        }
    }

    test() {
        let userModel = new UserModel({ username, password });
        // throw Error('xxxx');
        return this.dao.find(userModel);
    }
}

module.exports = TestService;