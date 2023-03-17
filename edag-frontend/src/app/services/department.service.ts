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
