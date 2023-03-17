import { Component, Input, Output, EventEmitter } from '@angular/core';

import {User} from "../../models/user";

@Component({
    selector: '[app-table-item-user]',
    templateUrl: './table-item-user.component.html',
    styleUrls: ['./table-item-user.component.css']
})



export class TableItemUserComponent {
    @Input()
    user: User = {} as User;
    @Output()
    onDeleteUser: EventEmitter<User> = 
        new EventEmitter()


    onDelete(user: User) {
        this.onDeleteUser.emit(user);
    }

}
