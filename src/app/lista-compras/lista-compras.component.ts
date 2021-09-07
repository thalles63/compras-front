import { Component, OnInit } from '@angular/core';

@Component({
	templateUrl: './lista-compras.component.html',
	styleUrls: ['./lista-compras.component.scss']
})
export class ListaComprasComponent implements OnInit {
	constructor(
	) { }

	listaChecked: any = [];
	lista: any = [
		{ id: 1, descricao: 'Paçoca', checked: false },
		{ id: 2, descricao: 'Molho', checked: false },
		{ id: 3, descricao: 'Leite Condensado', checked: false },
		{ id: 4, descricao: 'Iogurte', checked: false },
	];
	filtro: string = '';
	showAddButton: boolean = false;

	ngOnInit(): void {
		this.lista.sort((a: any, b: any) => {
			var textA = a.descricao.toUpperCase();
			var textB = b.descricao.toUpperCase();
			return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
		});

		this.listaChecked = this.lista.filter((item:any) => !!item.checked);
		this.lista = this.lista.filter((item:any) => !item.checked);
	}

	checkItem(item: any) {
		this.filtro = '';
		item.checked = true;
		this.listaChecked.push(item);
		this.listaChecked = this.sortLista(this.listaChecked);
		this.lista.splice(this.lista.map((e: any) => { return e.id; }).indexOf(item.id), 1);
	}

	uncheckItem(item: any) {
		this.filtro = '';
		item.checked = false;
		this.lista.push(item);
		this.lista = this.sortLista(this.lista);
		this.listaChecked.splice(this.listaChecked.map((e: any) => { return e.id; }).indexOf(item.id), 1);
	}

	checkIfListaEmpty() {
		let listaHasItem = false;
		let listaCheckedHasItem = false;
		
		if (this.lista.length > 0) 
			listaHasItem = this.lista.filter((item: any) => item.descricao.includes(this.filtro)).length > 0;
		
		if (this.listaChecked.length > 0) 
			listaCheckedHasItem = this.listaChecked.filter((item: any) => item.descricao.includes(this.filtro)).length > 0;
		
		this.showAddButton = (!!this.filtro && (!listaHasItem && !listaCheckedHasItem));
	}

	sortLista(lista: any) {
		return lista.sort((a: any, b: any) => {
			var textA = a.descricao.toUpperCase();
			var textB = b.descricao.toUpperCase();
			return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
		});
	}

	addToList() {
		//salvar em back aqui e pegar retorno 
		this.listaChecked.push({
			id: 5,
			descricao: this.filtro,
			checked: true
		});
		this.listaChecked = this.sortLista(this.listaChecked);

		this.filtro = '';
		this.showAddButton = false;
	}
}
