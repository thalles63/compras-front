import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(public authService: AuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
        const authenticatedAccess = this.authenticatedAccess(request.url);

        if (!authenticatedAccess) {
            return next.handle(request);
        }

        request = this.authService.addAuthHeader(request);
        return next.handle(request);
    }

    private authenticatedAccess(url: string) {
        if (url.includes("/api/login") || url.includes("/api/usuarios")) {
            return false;
        }

        return url.includes("/api");
    }
}
