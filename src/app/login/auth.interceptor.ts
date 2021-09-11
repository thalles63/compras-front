import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { LoginService } from './login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        public loginService: LoginService
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        const authenticatedAccess = this.authenticatedAccess(request.url);

        if (!authenticatedAccess) {
            return next.handle(request);
        }

        request = this.loginService.addAuthHeader(request);
        return next.handle(request);
    }

    private authenticatedAccess(url: string) {
        if (url.includes('/api/login')) { return false; }
        if (url.includes('/api/usuarios')) { return false; }
        return (url.includes('/api'));
    }
}
