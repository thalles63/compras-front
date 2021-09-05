import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageContainerModule } from '../components/page-container/page-container.module';
import { ConfigsComponent } from './configs.component';
import { ConfigsRoutingModule } from './configs.routing';

@NgModule({
	declarations: [ConfigsComponent],
	imports: [
		ConfigsRoutingModule,
		CommonModule,
		PageContainerModule
	],
	exports: [ConfigsComponent],
	providers: [],
	bootstrap: []
})
export class ConfigsModule {
}
