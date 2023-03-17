import { User } from "./user";

export interface iDepartment {
    id: number,
    name: string;
    users: User[];
}