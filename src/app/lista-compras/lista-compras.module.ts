import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageContainerModule } from '../components/page-container/page-container.module';
import { ListaComprasComponent } from './lista-compras.component';
import { ListaComprasRoutingModule } from './lista-compras.routing';

@NgModule({
	declarations: [ListaComprasComponent],
	imports: [
		ListaComprasRoutingModule,
		CommonModule,
		PageContainerModule
	],
	exports: [ListaComprasComponent],
	providers: [],
	bootstrap: []
})
export class ListaComprasModule {
}
