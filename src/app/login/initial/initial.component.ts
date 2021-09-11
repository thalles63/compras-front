import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoginService } from '../login.service';
import { User } from '../models/user';

@Component({
	templateUrl: './initial.component.html',
	styleUrls: [ './initial.component.scss' ]
})
export class LoginComponent implements AfterViewInit, OnDestroy {
	constructor(
		private router: Router,
        private loginService: LoginService
	) {}

    users: User[] = []
    private ngUnsubscribe: Subject<any> = new Subject();

	ngAfterViewInit(): void {
        this.loginService.getUsers()
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe((response) => {
                this.users = response;
            });
    }

    chooseUser(user: User) {
        this.loginService.chooseUser(user);
        this.router.navigate(['login/password'], { replaceUrl: true });
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
