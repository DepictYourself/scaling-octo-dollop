import { Component, Input, OnInit } from '@angular/core';

import { DepartmentService } from 'src/app/services/department.service';

import { iDepartment } from '../../models/iDepartment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

    @Input()
    departments: iDepartment[] = [];

    constructor(private departmentService: DepartmentService){
        
    }
    ngOnInit(): void {
        this.departmentService.getDepartments().subscribe(departments => {
            this.departments = departments;
        })
    }
}
