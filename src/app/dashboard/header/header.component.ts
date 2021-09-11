import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/login/models/user';
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
	user: User = {} as User;

	ngOnInit(): void {
        let now = new Date();
        
        this.dia = now.getDate();
        this.diaExtenso = this.dashboardService.getDiasDaSemana()[ now.getDay() ];
        this.mes = this.dashboardService.getMes()[ now.getMonth() ];
        this.user = JSON.parse(localStorage.getItem('user') || '{}');
    }
}
