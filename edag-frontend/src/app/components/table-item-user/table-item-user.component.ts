import { Component, Input } from '@angular/core';

@Component({
  selector: '[app-table-item-user]',
  templateUrl: './table-item-user.component.html',
  styleUrls: ['./table-item-user.component.css']
})
export class TableItemUserComponent {
    @Input()
    name: string = "";
    @Input()
    birthday: string = "";


}
