import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

    @Input()
    name: string = "";

    @Input()
    users: {name: string, birthday:string}[]= [];

}
