import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Component({
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
	constructor(
		private router: Router
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
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['dashboard'], { replaceUrl: true });
    }
}
