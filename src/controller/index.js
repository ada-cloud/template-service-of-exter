import { Controller } from "ada-cloud-util/boost";
import { controller, action, service } from "ada-cloud-util/boost/annotation";
import Result from "ada-cloud-util/result";
import UserService from "./../service/user";

@controller({ path: "/" })
class UserController extends Controller {

    @service(UserService)
    userService = null;

    @action({ path: "/list" })
    getUserListSimple({ request }) {
        return this.userService.getUserList({ entity: request.query }).then(list => Result.getSuccessResult(list));
    }
}

export default UserController;