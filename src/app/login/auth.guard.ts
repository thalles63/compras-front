import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivateChild {

	constructor(
		private router: Router,
		private loginService: LoginService
	) { }

	canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
		if (!this.loginService.isLogged()) {
			this.router.navigate(['login'], { replaceUrl: true });
			return false;
		}

		return true;
	}
}
