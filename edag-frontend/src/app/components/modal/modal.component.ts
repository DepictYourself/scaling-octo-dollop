import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
    @Input()
    id!: number;

    @Output()
    toggleModalEvent: EventEmitter<string> = new EventEmitter();

    name: string = "";
    birthday: string = "";

    onClickHandler(): void {
        const el = document.querySelector(`#modal-${this.id} form`);
        if(el){
            (el as HTMLFormElement).reset();
        }
        this.toggleModalEvent.emit("modal-" + this.id);
    }

    submitHandler($event: Event) : void {
        console.log("form submitted:");
        console.log($event);
        
    }
}
