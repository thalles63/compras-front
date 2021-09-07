import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComprasComponent } from './compras.component';
import { ComprasRoutingModule } from './compras.routing';

@NgModule({
	declarations: [ComprasComponent],
	imports: [
		ComprasRoutingModule,
		CommonModule
	],
	exports: [ComprasComponent],
	providers: [],
	bootstrap: []
})
export class ComprasModule {
}
