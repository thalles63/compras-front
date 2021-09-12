import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularDraggableModule } from 'angular2-draggable';

import { FilterPipe } from '../pipes/filter/filter.pipe';
import { ListaComprasComponent } from './components/lista-compras.component';
import { ListaComprasRoutingModule } from './lista-compras.routing';
import { ListaComprasService } from './lista-compras.service';

@NgModule({
	declarations: [ListaComprasComponent,FilterPipe],
	imports: [
		ListaComprasRoutingModule,
		CommonModule,
		FormsModule,
		AngularDraggableModule 
	],
	exports: [ListaComprasComponent],
	providers: [
		ListaComprasService
	],
	bootstrap: []
})
export class ListaComprasModule {
}
