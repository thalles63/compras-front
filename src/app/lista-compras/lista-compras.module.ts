import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PageContainerModule } from '../components/page-container/page-container.module';
import { FilterPipe } from '../pipes/filter/filter.pipe';
import { ListaComprasComponent } from './lista-compras.component';
import { ListaComprasRoutingModule } from './lista-compras.routing';

@NgModule({
	declarations: [ListaComprasComponent,FilterPipe],
	imports: [
		ListaComprasRoutingModule,
		CommonModule,
		PageContainerModule,
		FormsModule
	],
	exports: [ListaComprasComponent],
	providers: [],
	bootstrap: []
})
export class ListaComprasModule {
}
