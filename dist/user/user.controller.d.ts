import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUsers(): Promise<import("./user.entity").User[]>;
    createUser(body: any): Promise<import("./user.entity").User>;
}
