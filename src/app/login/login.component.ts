import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { User } from './user';

@Component({
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
	constructor(
		private router: Router,
        private loginService: LoginService
	) {}

    users: User[] = [
        {
            id: 1,
            nome: "Thalles Leonardelli",
            imgNome: "thalles"
        },
        {
            id: 2,
            nome: "Thays Maineri",
            imgNome: "Thays"
        }
    ]

	ngOnInit(): void {
    // jhgjhgjg
    }

    doLogin(user: User) {
        this.loginService.login(user);
        this.router.navigate(['dashboard'], { replaceUrl: true });
    }
}
