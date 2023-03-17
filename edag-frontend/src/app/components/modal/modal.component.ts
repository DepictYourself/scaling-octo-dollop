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

    onClickHandler(): void {
        this.toggleModalEvent.emit("modal-" + this.id);
    }
}
