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
    toggleModal: EventEmitter<string> = new EventEmitter();

    onClickHandler(): void {
        this.toggleModal.emit("modal-" + this.id);
    }
}
