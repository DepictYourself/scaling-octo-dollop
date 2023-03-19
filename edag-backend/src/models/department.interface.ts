import { User } from "./user.interface";

export interface Department {
    id?: string;
    name: string;
    users: User[];
}

