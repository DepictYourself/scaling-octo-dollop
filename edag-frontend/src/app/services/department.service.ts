import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

import { iDepartment } from '../models/iDepartment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

    apiEndpointUrl: string = "http://localhost:3000";

    constructor() { }

    getDepartments(): Observable<iDepartment[]> {
        return from(
            fetch(this.apiEndpointUrl)
            .then(res => res.json())
            .then(data => data)
        ); 
    }

    updateDepartment(id: string, department: iDepartment): Observable<iDepartment> {
        return from(
            fetch(`${this.apiEndpointUrl}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(department)
            }).then(res => res.json())
            .then(department => department)
        )
    }

    // postDepartments(creatableDepartments: iDepartment[]): Observable<iDepartment[]> {
    //     return from(
    //         fetch(this.apiEndpointUrl, {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify({
    //                 departments: creatableDepartments
    //             })
    //         }).then(res => res.json())
    //         .then(deps => deps)
    //     )
    // }
}
