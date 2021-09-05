import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
	constructor() {}

    isLogged() {
        let user = JSON.parse(localStorage.getItem('user') || '{}');
        return !!user.id;
    }

}
