import { Component, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
    templateUrl: "./confirmationModal.component.html",
    styleUrls: ["./confirmationModal.component.scss"]
})
export class ConfirmationModal {
    constructor(public activeModal: NgbActiveModal) {}

    @Input() title!: string;
    @Input() body!: string;

    btnClick(retorno: boolean): void {
        this.activeModal.close(retorno);
    }
}
