import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageContainerModule } from '../components/page-container/page-container.module';
import { ComprasComponent } from './compras.component';
import { ComprasRoutingModule } from './compras.routing';

@NgModule({
	declarations: [ComprasComponent],
	imports: [
		ComprasRoutingModule,
		CommonModule,
		PageContainerModule
	],
	exports: [ComprasComponent],
	providers: [],
	bootstrap: []
})
export class ComprasModule {
}
