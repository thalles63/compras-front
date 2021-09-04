import { Component, OnInit } from '@angular/core';

@Component({
	templateUrl: './dashboard.component.html',
	styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
	constructor(
	) {}

	compras: any = [
		{
			titulo: 'Netflix',
			nomeImg: 'netflix',
			valor: 47.00,
			quemPagou: 'Thays'
		},
		{
			titulo: 'Kenji Sushi',
			nomeImg: 'kenji',
			valor: 90.00,
			quemPagou: 'Thalles'
		}
	]

	ngOnInit(): void {
    // jhgjhgjg
  }
}
