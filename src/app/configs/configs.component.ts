import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
	templateUrl: './configs.component.html',
	styleUrls: [ './configs.component.scss' ]
})
export class ConfigsComponent implements OnInit {
	constructor(
		private loginService: LoginService,
		private router: Router
	) {}

	ngOnInit(): void {
    // jhgjhgjg
  	}

	logout() {
		this.loginService.logout();
        this.router.navigate(['login'], { replaceUrl: true });
	}
}
