import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ListaComprasService } from '../lista-compras.service';
import { ListaCompras } from '../models/lista-compras';

@Component({
	templateUrl: './lista-compras.component.html',
	styleUrls: ['./lista-compras.component.scss']
})
export class ListaComprasComponent implements AfterViewInit, OnDestroy {
	constructor(
		private listaComprasService: ListaComprasService
	) { }

	filtro: string = '';
	lista: ListaCompras[] = [] as ListaCompras[];
	listaChecked: ListaCompras[] = [] as ListaCompras[];
	showAddButton: boolean = false;
    private ngUnsubscribe: Subject<any> = new Subject();

	ngAfterViewInit(): void {
		this.listaComprasService.list()
			.pipe(takeUntil(this.ngUnsubscribe))
			.subscribe((response: ListaCompras[]) => {
				response = this.sortLista(response);
		
				this.listaChecked = response.filter((item: ListaCompras) => !!item.checado);
				this.lista = response.filter((item: ListaCompras) => !item.checado);
			});
	}

	checkItem(item: ListaCompras) {
		item.checado = true;
		
		this.listaComprasService.edit(item._id || '', item)
			.pipe(takeUntil(this.ngUnsubscribe))
			.subscribe(() => {
				this.filtro = '';
				this.listaChecked.push(item);
				this.listaChecked = this.sortLista(this.listaChecked);
				this.lista.splice(this.lista.map((e: ListaCompras) => { return e._id; }).indexOf(item._id), 1);
			});
	}

	uncheckItem(item: ListaCompras) {
		item.checado = false;

		this.listaComprasService.edit(item._id || '', item)
			.pipe(takeUntil(this.ngUnsubscribe))
			.subscribe(() => {
				this.filtro = '';
				this.lista.push(item);
				this.lista = this.sortLista(this.lista);
				this.listaChecked.splice(this.listaChecked.map((e: ListaCompras) => { return e._id; }).indexOf(item._id), 1);
			});
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
		let compra: ListaCompras = {
			descricao: this.filtro,
			checado: true
		}

		this.listaComprasService.save(compra)
			.pipe(takeUntil(this.ngUnsubscribe))
			.subscribe((response: ListaCompras) => {
				this.listaChecked.push(response);
				this.listaChecked = this.sortLista(this.listaChecked);

				this.filtro = '';
				this.showAddButton = false;
			});
	}

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
