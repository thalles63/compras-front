import { Component, Input } from "@angular/core";

@Component({
    selector: "compras-list",
    templateUrl: "./compras-list.component.html",
    styleUrls: ["./compras-list.component.scss"]
})
export class ComprasListComponent {
    @Input() list: any = [];
    @Input() simplified = false;
}
