import { HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "src/app/modules/login/models/user";

@Injectable()
export class AuthService {
    isLogged() {
        const usuario = JSON.parse(localStorage.getItem("usuario") || "{}");
        return !!usuario.token;
    }

    logout() {
        localStorage.removeItem("usuario");
    }

    addAuthHeader(request: HttpRequest<any>) {
        const accessToken = this.getTokenFromStore();
        const headers: any = {};

        if (accessToken) {
            headers["Authorization"] = accessToken;
        }

        return request.clone({
            setHeaders: headers
        });
    }

    getTokenFromStore(): string {
        return JSON.parse(localStorage.getItem("usuario") || "").token;
    }

    getUsuario(): User {
        return JSON.parse(localStorage.getItem("usuario") || "");
    }
}
