import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComprasListModule } from '../components/compras-list/compras-list.module';

import { DashboardActionPanelComponent } from './action-panel/action-panel.component';
import { DashboardHeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { DashboardService } from './dashboard.service';

@NgModule({
	declarations: [
		DashboardComponent,
		DashboardHeaderComponent,
		DashboardActionPanelComponent
	],
	imports: [
		DashboardRoutingModule,
		CommonModule,
		ComprasListModule
	],
	exports: [DashboardComponent],
	providers: [
		DashboardService
	],
	bootstrap: []
})
export class DashboardModule {
}
