import { Component, OnInit } from "@angular/core";
import { User } from "../../login/models/user";
import { DashboardService } from "../dashboard.service";

@Component({
    selector: "dashboard-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.scss"]
})
export class DashboardHeaderComponent implements OnInit {
    constructor(private dashboardService: DashboardService) {}

    dia = 0;
    diaExtenso = "";
    mes = "";
    usuario: User = {} as User;

    ngOnInit(): void {
        const now = new Date();

        this.dia = now.getDate();
        this.diaExtenso = this.dashboardService.getDiasDaSemana()[now.getDay()];
        this.mes = this.dashboardService.getMes()[now.getMonth()];
        this.usuario = JSON.parse(localStorage.getItem("usuario") || "{}");
    }
}
