import { Component } from "@angular/core";

@Component({
    templateUrl: "./gastos.component.html",
    styleUrls: ["./gastos.component.scss"]
})
export class GastosComponent {
    compras: any = [
        {
            data: "2021-09-07",
            titulo: "Netflix",
            categoria: "entretenimento",
            valor: 47.0,
            idPagador: 2,
            porcentagem: [
                { idPagador: 1, porcentagem: 65 },
                { idPagador: 2, porcentagem: 35 }
            ]
        },
        {
            titulo: "Kenji Sushi",
            categoria: "restaurante",
            valor: 90.0,
            quemPagou: "Thalles"
        }
    ];
}
