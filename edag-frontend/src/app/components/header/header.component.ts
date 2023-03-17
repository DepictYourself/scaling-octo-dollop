import { Component, Input, OnInit } from '@angular/core';

import { iDepartment } from './iDepartment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

    apiEndpointUrl: string = "http://localhost:3000/departments";

    @Input()
    departments: iDepartment[] = [];

    ngOnInit(): void {
        fetch(this.apiEndpointUrl)
        .then(res => res.json())
        .then(data => {
                console.log(data);
                this.departments = data
            });
    }
}
