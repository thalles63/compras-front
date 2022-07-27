import { Injectable } from "@angular/core";
import { CanActivateChild, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({ providedIn: "root" })
export class AuthGuard implements CanActivateChild {
    constructor(private router: Router, private authService: AuthService) {}

    canActivateChild(): boolean | Observable<boolean> | Promise<boolean> {
        if (!this.authService.isLogged()) {
            this.router.navigate(["login"], { replaceUrl: true });
            return false;
        }

        return true;
    }
}
