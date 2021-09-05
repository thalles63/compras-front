import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { LoginService } from './login.service';

@NgModule({
	declarations: [
        LoginComponent
	],
	imports: [
		CommonModule,
	],
	exports: [LoginComponent],
	providers: [
        LoginService
	],
	bootstrap: []
})
export class LoginModule {
}
