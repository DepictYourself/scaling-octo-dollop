import { User } from "./user";

export interface iDepartment {
    _id: string,
    name: string;
    users: User[];
}