import { UserDto } from "./user.dto";

export class UpdateDepartmentDto {
    _id: string;
    name: string;
    users: Array<UserDto>;
}