import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageContainerComponent } from './page-container.component';

@NgModule({
	declarations: [
        PageContainerComponent
	],
	imports: [
		CommonModule,
	],
	exports: [
        PageContainerComponent
    ],
	providers: [
	],
	bootstrap: []
})
export class PageContainerModule {
}
