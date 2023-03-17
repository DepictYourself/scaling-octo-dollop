import { Component, Input, OnInit } from '@angular/core';

import { DepartmentService } from 'src/app/services/department.service';

import { iDepartment } from 'src/app/models/iDepartment';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
    
    @Input()
    department: iDepartment = {} as iDepartment;

    constructor(private departmentService: DepartmentService){}
    
    
    ngOnInit(): void {
        console.log(this.department.users);
        
    }

    deleteUser(user: User){
        this.departmentService.removeUser(this.department, user)
            .subscribe(d => {
                this.department = d;
            } )
    }

}
