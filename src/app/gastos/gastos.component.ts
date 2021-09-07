import { Component, OnInit } from '@angular/core';

@Component({
	templateUrl: './gastos.component.html',
	styleUrls: [ './gastos.component.scss' ]
})
export class GastosComponent implements OnInit {
	constructor(
	) {}

	compras: any = [
		{
			titulo: 'Netflix',
			categoria: 'entretenimento',
			valor: 47.00,
			quemPagou: 'Thays'
		},
		{
			titulo: 'Kenji Sushi',
			categoria: 'restaurante',
			valor: 90.00,
			quemPagou: 'Thalles'
		}
	]

	ngOnInit(): void {
    // jhgjhgjg
  }
}
