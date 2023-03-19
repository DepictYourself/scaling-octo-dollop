import { UserDto } from "./user.dto";

export class DepartmentDto {
    readonly name: string;
    readonly users: UserDto[];
}