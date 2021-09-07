import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FilterPipe } from '../pipes/filter/filter.pipe';
import { ListaComprasComponent } from './lista-compras.component';
import { ListaComprasRoutingModule } from './lista-compras.routing';

@NgModule({
	declarations: [ListaComprasComponent,FilterPipe],
	imports: [
		ListaComprasRoutingModule,
		CommonModule,
		FormsModule
	],
	exports: [ListaComprasComponent],
	providers: [],
	bootstrap: []
})
export class ListaComprasModule {
}
