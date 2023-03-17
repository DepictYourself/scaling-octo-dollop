import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

import { iDepartment } from '../models/iDepartment';

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
}
