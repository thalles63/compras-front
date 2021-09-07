import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComprasListModule } from '../components/compras-list/compras-list.module';
import { GastosComponent } from './gastos.component';
import { GastosRoutingModule } from './gastos.routing';

@NgModule({
	declarations: [GastosComponent],
	imports: [
		GastosRoutingModule,
		CommonModule,
		ComprasListModule
	],
	exports: [GastosComponent],
	providers: [],
	bootstrap: []
})
export class GastosModule {
}
