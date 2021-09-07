import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PageContainerModule } from '../components/page-container/page-container.module';

import { TemplateComponent } from './template.component';
import { NavBottomComponent } from './nav-bottom/nav-bottom.component';
import { MenusService } from './menus/menus.service';

@NgModule({
	declarations: [
		NavBottomComponent,
		TemplateComponent
	],
	imports: [
		CommonModule,
        RouterModule,
		BrowserAnimationsModule,
        PageContainerModule
	],
	exports: [TemplateComponent],
	providers: [
		MenusService
	],
	bootstrap: []
})
export class TemplateModule {
}
