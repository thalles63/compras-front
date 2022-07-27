import { AfterViewInit, Component, OnDestroy } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { merge, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { ConfirmationModal } from "src/app/components/confirmationModal/confirmationModal.component";
import { ListaComprasService } from "../lista-compras.service";
import { ListaCompras } from "../models/lista-compras";

@Component({
    templateUrl: "./lista-compras.component.html",
    styleUrls: ["./lista-compras.component.scss"]
})
export class ListaComprasComponent implements AfterViewInit, OnDestroy {
    constructor(private listaComprasService: ListaComprasService, private modalService: NgbModal) {}

    filtro = "";
    lista: ListaCompras[] = [] as ListaCompras[];
    showAddButton = false;
    ngUnsubscribe = new Subject<void>();

    ngAfterViewInit(): void {
        this.listaComprasService
            .list()
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe((response: ListaCompras[]) => {
                this.lista = response;
            });
    }

    toggleItem(item: ListaCompras) {
        item.checado = !item.checado;

        this.listaComprasService
            .edit(item._id || "", item)
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(() => {
                this.filtro = "";
            });
    }

    abreModalRemoveItem(item: ListaCompras, index: number, event: any) {
        event.stopPropagation();

        const modal = this.modalService.open(ConfirmationModal, { size: "md" });

        modal.componentInstance.title = "Deseja realmente excluir?";
        modal.componentInstance.body = `Deseja excluir o item: ${item.descricao}`;

        const modalClosed = merge(modal.closed, modal.dismissed);
        modalClosed.pipe(takeUntil(this.ngUnsubscribe)).subscribe((result: boolean) => {
            if (result) {
                this.removeItem(item, index);
            }
        });
    }

    removeItem(item: ListaCompras, index: number) {
        this.listaComprasService
            .delete(item._id)
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe(() => {
                this.lista.splice(index, 1);
            });
    }

    checkIfListaEmpty() {
        let listaHasItem = false;

        if (this.lista.length > 0)
            listaHasItem = this.lista.filter((item: ListaCompras) => item.descricao.includes(this.filtro)).length > 0;

        this.showAddButton = !!this.filtro && !listaHasItem;
    }

    sortLista(lista: ListaCompras[]) {
        return lista.sort(
            (a: ListaCompras, b: ListaCompras) =>
                +b.checado - +a.checado || a.descricao.toUpperCase().localeCompare(b.descricao.toUpperCase())
        );
    }

    addToList() {
        const compra: ListaCompras = {
            descricao: this.filtro,
            checado: true
        };

        this.listaComprasService
            .save(compra)
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe((response: ListaCompras) => {
                this.lista.push(response);

                this.filtro = "";
                this.showAddButton = false;
            });
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
