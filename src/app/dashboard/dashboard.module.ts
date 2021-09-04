import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';

@NgModule({
	declarations: [DashboardComponent],
	imports: [
		DashboardRoutingModule,
		CommonModule,
	],
	exports: [DashboardComponent],
	providers: [],
	bootstrap: []
})
export class DashboardModule {
}
