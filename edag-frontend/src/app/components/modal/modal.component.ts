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

    @Output()
    newUserFormSubmitEvent: EventEmitter<{name: string, birthday: string}> = 
        new EventEmitter();


    name: string = "";
    birthday: string = "";

    onClickHandler(): void {
        const el = document.querySelector(`#modal-${this.id} form`);
        if(el){
            (el as HTMLFormElement).reset();
        }
        this.toggleModalEvent.emit("modal-" + this.id);
    }

    submitHandler() : void {
        if(!this.name){
            alert("Please enter name");
        }
        if(!this.birthday){
            alert("Please enter birthday");
        }

        this.newUserFormSubmitEvent.emit({
            name: this.name,
            birthday: this.birthday
        });

        this.onClickHandler();  // Reset form and toggle modal window.
    }
}
