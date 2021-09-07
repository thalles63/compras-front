import { Injectable } from '@angular/core';
import { User } from './models/user';

@Injectable()
export class LoginService {
	constructor() {}

    isLogged() {
        let user = JSON.parse(localStorage.getItem('user') || '{}');
        return !!user.allowed;
    }

    logout() {
        localStorage.removeItem('user');
    }

    chooseUser(user: User) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    doLogin(user: User, password: string) {
        //vai pra back fazer login
        user.allowed = true;
        localStorage.setItem('user', JSON.stringify(user));
    }
}
