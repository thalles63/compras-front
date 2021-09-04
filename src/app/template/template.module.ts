import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { TemplateComponent } from './template.component';
import { NavBottomComponent } from './nav-bottom/nav-bottom.component';
import { MenusService } from './menus.service';

@NgModule({
	declarations: [
		NavBottomComponent,
		TemplateComponent
	],
	imports: [
		CommonModule,
        RouterModule
	],
	exports: [TemplateComponent],
	providers: [
		MenusService
	],
	bootstrap: []
})
export class TemplateModule {
}
