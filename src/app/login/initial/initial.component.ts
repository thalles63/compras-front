import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../models/user';

@Component({
	templateUrl: './initial.component.html',
	styleUrls: [ './initial.component.scss' ]
})
export class LoginComponent implements OnInit {
	constructor(
		private router: Router,
        private loginService: LoginService
	) {}

    users: User[] = []

	ngOnInit(): void {
        this.loginService.getUsers()
        .subscribe((response) => {
            this.users = response;
        });
    }

    chooseUser(user: User) {
        this.loginService.chooseUser(user);
        this.router.navigate(['login/password'], { replaceUrl: true });
    }
}
