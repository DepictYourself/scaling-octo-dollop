import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
    
    @Input()
    name: string = "";
    
    @Input()
    users: {name: string, birthday:string}[]= [];
    
    
    ngOnInit(): void {
        console.log(this.users);
        
    }

}
