import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable()
export class LoginService {
	constructor() {}

    isLogged() {
        let user = JSON.parse(localStorage.getItem('user') || '{}');
        return !!user.id;
    }

    logout() {
        localStorage.removeItem('user');
    }

    login(user: User) {
        localStorage.setItem('user', JSON.stringify(user));
    }
}
