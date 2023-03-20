import { Component, Input, OnInit } from '@angular/core';

import { initFlowbite, Modal, ModalOptions } from 'flowbite'

import { DepartmentService } from 'src/app/services/department.service';

import { iDepartment } from 'src/app/models/iDepartment';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
    modal = new Modal();
    
    @Input()
    tableIndex: number = 0;
    @Input()
    department: iDepartment = {} as iDepartment;

    constructor(private departmentService: DepartmentService){}
    
    
    ngOnInit(): void {
        initFlowbite();
    }
    
    ngAfterViewInit(): void {
        this.initModal(this.tableIndex);

    }

    deleteUser(user: User){
        // TODO
        throw new Error("Not implemented.");
    }

    createUser(creatableUser: {name: string, birthday: string}){
        this.departmentService.addUser(this.department, creatableUser)
            .subscribe(resDepartment => {
                this.department = resDepartment;
            })
        
    }

    initModal(modalIndex: number): void {
        const modalEl: HTMLElement | null = document.getElementById("modal-"+modalIndex);

        const modalOptins: ModalOptions = {
            placement: "center",
            backdrop: "dynamic",
            backdropClasses: "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
            closable: true,
            onHide: () => {
                // console.log("hiding modal");
            },
            onShow: () => {
                // console.log("showing modal");
            },
            onToggle: () => {
                // console.log("modal toggled");
            }
        }
        this.modal = new Modal(modalEl, modalOptins);
    }

    toggleModal(): void{
        this.modal.toggle();
    }

}
