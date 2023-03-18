import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

import { iDepartment } from '../models/iDepartment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

    apiEndpointUrl: string = "http://localhost:3000/departments";

    constructor() { }

    getDepartments(): Observable<iDepartment[]> {
        return from(
            fetch(this.apiEndpointUrl)
            .then(res => res.json())
            .then(data => data)
        ); 
    }

    addUser(department: iDepartment, creatableUser: {name: string, birthday: string}): Observable<iDepartment> {
        const url = `${this.apiEndpointUrl}/${department.id}`

        const newUser: User = {
            id: this.getNewUserId(department),
            name: creatableUser.name,
            birthday: creatableUser.birthday
        }
        const newUserArray = department.users.concat(newUser);

        return from(
            fetch(url, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    users: newUserArray
                })
            })
            .then(res => res.json())
            .then(department => department)
        );
    }

    private getNewUserId(department: iDepartment): number{
        const userArrayLength = department.users.length;
        const lastUser = department.users[userArrayLength - 1];
        return lastUser.id + 1;
    }

    removeUser(department: iDepartment, deletableUser: User): Observable<iDepartment> {
        const url = `${this.apiEndpointUrl}/${department.id}`
        const newUsersObj = {
            users: department.users.filter(u => u.id !== deletableUser.id)
        }

        return from(
            fetch(url, {
                method: "PATCH",
                body: JSON.stringify(newUsersObj),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => res.json())
            .then(json => json)
        );
    }
}
