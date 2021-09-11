import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './initial/initial.component';
import { LoginService } from './login.service';
import { LoginPasswordComponent } from './password/password.component';

@NgModule({
	declarations: [
        LoginComponent,
		LoginPasswordComponent
	],
	imports: [
		CommonModule,
		FormsModule,
	],
	exports: [
		LoginComponent, 
		LoginPasswordComponent
	],
	providers: [
        LoginService
	],
	bootstrap: []
})
export class LoginModule {
}
