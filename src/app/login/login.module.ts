import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
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
        HttpClientModule,
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
