import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/helpers/services/auth.service";
import { User } from "../../login/models/user";
import { DashboardService } from "../dashboard.service";

@Component({
    selector: "dashboard-mobile-header",
    templateUrl: "./mobile-header.component.html",
    styleUrls: ["./mobile-header.component.scss"]
})
export class DashboardHeaderComponent implements OnInit {
    constructor(private dashboardService: DashboardService, private authService: AuthService) {}

    dia = 0;
    diaExtenso = "";
    mes = "";
    usuario: User = {} as User;

    ngOnInit(): void {
        const now = new Date();

        this.dia = now.getDate();
        this.diaExtenso = this.dashboardService.getDiasDaSemana()[now.getDay()];
        this.mes = this.dashboardService.getMes()[now.getMonth()];
        this.usuario = this.authService.getUsuario();
    }
}
