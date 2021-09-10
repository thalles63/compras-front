import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../models/user';

@Component({
	templateUrl: './initial.component.html',
	styleUrls: [ './initial.component.scss' ]
})
export class LoginComponent implements AfterViewInit {
	constructor(
		private router: Router,
        private loginService: LoginService
	) {}

    users: User[] = []

	ngAfterViewInit(): void {
        this.loginService.getUsers()
        .subscribe((response) => {
            this.users = response;
        });
    }

    chooseUser(user: User) {
        this.loginService.getUsers()
        .subscribe((response) => {
            this.users = response;
        });
        this.loginService.getUsers()
        .subscribe((response) => {
            this.users = response;
        });
        // this.loginService.chooseUser(user);
        // this.router.navigate(['login/password'], { replaceUrl: true });
    }
}
