import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { UsuariosService } from "../usuarios/usuario.service";

import { LoginComponent } from "./initial/initial.component";
import { LoginService } from "./login.service";
import { LoginPasswordComponent } from "./password/password.component";

@NgModule({
    declarations: [LoginComponent, LoginPasswordComponent],
    imports: [CommonModule, FormsModule],
    providers: [LoginService, UsuariosService],
    bootstrap: []
})
export class LoginModule {}
