import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
    selector: 'dashboard-header',
	templateUrl: './header.component.html',
    styleUrls: [ './header.component.scss' ]
})
export class DashboardHeaderComponent implements OnInit {
	constructor(
        private dashboardService: DashboardService
	) {}
    
    dia: number = 0;
    diaExtenso: string = '';
    mes: string = '';

	ngOnInit(): void {
        let now = new Date();
    
        this.dia = now.getDate();
        this.diaExtenso = this.dashboardService.getDiasDaSemana()[ now.getDay() ];
        this.mes = this.dashboardService.getMes()[ now.getMonth() ];
    }
}
