import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AuthService } from "src/app/helpers/services/auth.service";
import { LoginComponent } from "./components/login.component";
import { PasswordComponent } from "./components/password/password.component";
import { UserComponent } from "./components/user/user.component";
import { LoginService } from "./login.service";

@NgModule({
    declarations: [LoginComponent, UserComponent, PasswordComponent],
    imports: [CommonModule, FormsModule],
    providers: [LoginService, AuthService]
})
export class LoginModule {}
