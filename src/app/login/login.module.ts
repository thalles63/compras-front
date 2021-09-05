import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageContainerModule } from '../components/page-container/page-container.module';

import { LoginComponent } from './login.component';
import { LoginService } from './login.service';

@NgModule({
	declarations: [
        LoginComponent
	],
	imports: [
		CommonModule,
        PageContainerModule
	],
	exports: [LoginComponent],
	providers: [
        LoginService
	],
	bootstrap: []
})
export class LoginModule {
}
