import { UserController } from "../controllers/example.controller";
import { indexRouter } from "./index.route";

export class UserRouter extends indexRouter<UserController>{
    constructor(){
        super(UserController)
    }

    routes(): void {
        this.router.get('/user', (req, res)=>this.controller.getUsers(req, res))
    }
}