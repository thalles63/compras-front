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
			data: '2021-09-07',
			titulo: 'Netflix',
			categoria: 'entretenimento',
			valor: 47.00,
			idPagador: 2,
			porcentagem: [{idPagador: 1, porcentagem: 65}, {idPagador: 2, porcentagem: 35}]
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
