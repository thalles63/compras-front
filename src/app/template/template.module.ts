import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TemplateComponent } from './template.component';

@NgModule({
	declarations: [TemplateComponent],
	imports: [
		CommonModule,
        RouterModule
	],
	exports: [TemplateComponent],
	providers: [],
	bootstrap: []
})
export class TemplateModule {
}
