import { HttpClient, HttpRequest } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Usuario } from '../usuarios/usuario';

@Injectable()
export class LoginService {
	constructor(
        private http: HttpClient
    ) {}

    private API_URL = environment.API_URL;

    isLogged() {
        let usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
        return !!usuario.token;
    }

    logout() {
        localStorage.removeItem('usuario');
    }

	addAuthHeader(request: HttpRequest<any>) {
		const accessToken = this.getTokenFromStore();
		const headers: any = {};

		if (accessToken) {
			headers['Authorization'] = accessToken;
		}

		return request.clone({
			setHeaders: headers
		});
	}

	getTokenFromStore(): string {
		return JSON.parse(localStorage.getItem('usuario') || '').token;
	}

    getUsuario(): Usuario {
        return JSON.parse(localStorage.getItem('usuario') || '');
    }

    escolherUsuario(usuario: Usuario) {
        localStorage.setItem('usuario-escolhido', JSON.stringify(usuario));
    }

    login(username: string, password: string) {
		return this.http.post<Usuario>(`${ this.API_URL }/api/login`, { username , password });
    }
}
