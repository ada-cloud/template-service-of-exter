import { Model, Types } from "ada-cloud-util/boost";
import { table, field } from "ada-cloud-util/boost/annotation"

@table({ name: "user" })
class UserModel extends Model { 
    
    @field({
        prime: true,
        name: "id",
        type: Types.STRING,
        valid: {required:true,max:32}
    })
    id = null;
    
    @field({
        name: "username",
        type: Types.STRING,
        valid: {max:50}
    })
    username = null;
    
    @field({
        name: "password",
        type: Types.STRING,
        valid: {max:30}
    })
    password = null;
}

export default UserModel;