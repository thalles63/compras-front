import { Component, OnInit } from '@angular/core';

@Component({
	templateUrl: './lista-compras.component.html',
	styleUrls: ['./lista-compras.component.scss']
})
export class ListaComprasComponent implements OnInit {
	constructor(
	) { }

	lista: any = [
		{ id: 1, descricao: 'Paçoca' },
		{ id: 2, descricao: 'Molho' },
		{ id: 3, descricao: 'Leite Condensado' },
		{ id: 4, descricao: 'Iogurte' },
	];

	ngOnInit(): void {
		// jhgjhgjg
	}

	toggleItem(item: any) {
		item.checked = !item.checked;
	}
}
