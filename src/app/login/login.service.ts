import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable()
export class LoginService {
	constructor(
        private http: HttpClient
    ) {}

    private API_URL = environment.API_URL;

    isLogged() {
        let user = JSON.parse(localStorage.getItem('user') || '{}');
        return !!user.token;
    }

    logout() {
        localStorage.removeItem('user');
    }

    chooseUser(user: User) {
        localStorage.setItem('user-chosen', JSON.stringify(user));
    }

    login(username: string, password: string) {
		return this.http.post<User>(`${ this.API_URL }/api/login`, { username , password });
    }

    getUsers() {
		return this.http.get<User[]>(`${ this.API_URL }/api/usuarios`);
    }
}
