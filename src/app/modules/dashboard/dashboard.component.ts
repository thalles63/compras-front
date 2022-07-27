import { Component } from "@angular/core";

@Component({
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent {
    compras: any = [
        {
            titulo: "Netflix",
            categoria: "entretenimento",
            valor: 47.0,
            quemPagou: "Thays"
        },
        {
            titulo: "Kenji Sushi",
            categoria: "restaurante",
            valor: 90.0,
            quemPagou: "Thalles"
        }
    ];
}
