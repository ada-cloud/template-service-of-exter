import { Service, MysqlDao } from "ada-cloud-util/boost";
import { dao } from "ada-cloud-util/boost/annotation";
import UserModel from "../model/user";

class TestService extends Service {

    @dao(MysqlDao)
    dao = null;

    getUserList({ entity = {}, query = {} }) {
        return this.dao.find(new UserModel().set(entity), query);
    }
}

export default TestService;