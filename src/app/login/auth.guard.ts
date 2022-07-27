import { Injectable } from "@angular/core";
import { CanActivateChild, Router } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivateChild {
    constructor(private router: Router, private loginService: LoginService) {}

    canActivateChild(): boolean | Observable<boolean> | Promise<boolean> {
        if (!this.loginService.isLogged()) {
            this.router.navigate(["login"], { replaceUrl: true });
            return false;
        }

        return true;
    }
}
