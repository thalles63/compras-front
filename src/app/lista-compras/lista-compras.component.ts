import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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
	@ViewChild('filtro') input: ElementRef | undefined;

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
		setTimeout(()=>{ 
			this.input?.nativeElement.focus();
		},0);  
	}

	uncheckItem(item: any) {
		this.filtro = '';
		item.checked = false;
		this.lista.push(item);
		this.lista = this.sortLista(this.lista);
		this.listaChecked.splice(this.listaChecked.map((e: any) => { return e.id; }).indexOf(item.id), 1);
		setTimeout(()=>{ 
			this.input?.nativeElement.focus();
		},0);  
	}

	sortLista(lista: any) {
		return lista.sort((a: any, b: any) => {
			var textA = a.descricao.toUpperCase();
			var textB = b.descricao.toUpperCase();
			return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
		});
	}
}
