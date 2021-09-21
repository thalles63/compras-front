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
	showAddButton: boolean = false;
	movingOffset = { x: 0, y: 0 };
	transition = false;
	inBounds = true;
	myOutOfBounds: any = { top: false, right: true, bottom: false, left: false };
	private ngUnsubscribe: Subject<any> = new Subject();

	ngAfterViewInit(): void {
		this.listaComprasService.list()
			.pipe(takeUntil(this.ngUnsubscribe))
			.subscribe((response: ListaCompras[]) => {
				this.lista = response;
			});
	}

	toggleItem(item: ListaCompras) {
		item.checado = !item.checado;
		delete item.screenProps;

		this.listaComprasService.edit(item._id || '', item)
			.pipe(takeUntil(this.ngUnsubscribe))
			.subscribe(() => {
				this.filtro = '';
			});
	}

	checkIfListaEmpty() {
		let listaHasItem = false;

		if (this.lista.length > 0)
			listaHasItem = this.lista.filter((item: any) => item.descricao.includes(this.filtro)).length > 0;

		this.showAddButton = (!!this.filtro && !listaHasItem);
	}

	sortLista(lista: any) {
		return lista.sort((a: ListaCompras, b: ListaCompras) => +b.checado - +a.checado
			|| a.descricao.toUpperCase().localeCompare(b.descricao.toUpperCase()));
	}

	addToList() {
		let compra: ListaCompras = {
			descricao: this.filtro,
			checado: true
		}

		this.listaComprasService.save(compra)
			.pipe(takeUntil(this.ngUnsubscribe))
			.subscribe((response: ListaCompras) => {
				this.lista.push(response);

				this.filtro = '';
				this.showAddButton = false;
			});
	}

	onStop(item: ListaCompras, lista: ListaCompras[], index: number) {
		this.transition = true;
		if (!item.screenProps) item.screenProps = {};
		let val = item.screenProps.movingOffsetX || 0;

		if (val < 130) {
			item.screenProps.posicao = { x: 0, y: 0 };
		} else {
			if (item.screenProps.movingOffsetX !== 0) {
				item.screenProps.posicao = { x: 500, y: 0 };

				this.listaComprasService.delete(item._id)
					.pipe(takeUntil(this.ngUnsubscribe))
					.subscribe(() => {
						if (!item.screenProps) item.screenProps = {};
						item.screenProps.deletado = true;
						setTimeout(() => {
							lista.splice(index, 1);
						}, 500);
					});
			}
		}
		this.setBounds(true);
		setTimeout(() => {
			this.transition = false;
		}, 500)
	}

	onMoving(event: any, item: ListaCompras) {
		if (!item.screenProps) item.screenProps = {};
		if (event.x > -5 && event.x < 5) {
			this.setBounds(false);
		}
		item.screenProps.movingOffsetX = event.x;
		item.screenProps.movingOffsetY = event.y;
	}

	setBounds(state: boolean) {
		this.myOutOfBounds['right'] = state;
	}

	ngOnDestroy() {
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
	}
}
