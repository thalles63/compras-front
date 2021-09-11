import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoginService } from '../login.service';
import { User } from '../models/user';

@Component({
	templateUrl: './password.component.html',
	styleUrls: [ './password.component.scss' ]
})
export class LoginPasswordComponent implements OnInit, OnDestroy {
	constructor(
		private router: Router,
        private loginService: LoginService
	) {}

    @ViewChild('number1') number1: ElementRef | undefined;
    @ViewChild('myform') myform: any;

    user: User = {} as User;
    error: string = '';
    private ngUnsubscribe: Subject<any> = new Subject();

	ngOnInit(): void {
        this.user = JSON.parse(localStorage.getItem('user-chosen') || '');
        this.user.primeiroNome = this.user.nome?.split(' ')[0];

        setTimeout(() => {
            this.number1?.nativeElement.focus()
        }, 500);
    }

    doLogin(senha: string, event?: any) {
        if (!!event && event.keyCode === 8) {
            this.keytab(event);
            return;
        }

        this.loginService.login(this.user.username, senha)
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe((response: any) => {
                this.user.token = response.token;
                localStorage.removeItem('user-chosen');
                localStorage.setItem('user', JSON.stringify(this.user));
                this.router.navigate(['dashboard'], { replaceUrl: true });
            }, (e: any) => {
                this.error = e.error.error;
            });
    }

    goBack() {
        this.router.navigate(['login'], { replaceUrl: true });
    }

    keytab(event: any) {
        let element = null;
        if (event.keyCode === 8) {
            element = event.srcElement.previousElementSibling;
        } else {
            element = event.srcElement.nextElementSibling;
        }
        if (element == null) return;
        element.focus();
    }

    clear(model: any) {
        model.value = '';
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

}
