import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/helpers/services/auth.service";
import { DashboardService } from "./dashboard.service";

@Component({
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
    constructor(private dashboardService: DashboardService, private authService: AuthService) {}

    dia = 0;
    diaExtenso = "";
    mes = "";
    usuario = this.authService.getUsuario();
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

    ngOnInit() {
        const now = new Date();

        this.dia = now.getDate();
        this.diaExtenso = this.dashboardService.getDiasDaSemana()[now.getDay()];
        this.mes = this.dashboardService.getMes()[now.getMonth()];
    }
}
