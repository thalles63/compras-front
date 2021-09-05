import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigsComponent } from './configs.component';
import { ConfigsRoutingModule } from './configs.routing';

@NgModule({
	declarations: [ConfigsComponent],
	imports: [
		ConfigsRoutingModule,
		CommonModule,
	],
	exports: [ConfigsComponent],
	providers: [],
	bootstrap: []
})
export class ConfigsModule {
}
