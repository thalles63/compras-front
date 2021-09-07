import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { User } from '../models/user';

@Component({
	templateUrl: './password.component.html',
	styleUrls: [ './password.component.scss' ]
})
export class LoginPasswordComponent implements OnInit {
	constructor(
		private router: Router,
        private loginService: LoginService
	) {}

    @ViewChild('number1') number1: ElementRef | undefined;
    @ViewChild('number2') number2: ElementRef | undefined;
    @ViewChild('number3') number3: ElementRef | undefined;
    @ViewChild('number4') number4: ElementRef | undefined;
    @ViewChild('myform') myform: any;

    user: User = {};

	ngOnInit(): void {
        this.user = JSON.parse(localStorage.getItem('user') || '');
        this.user.primeiroNome = this.user.nome?.split(' ')[0];

        setTimeout(() => {
            this.number1?.nativeElement.focus()
        }, 500);
    }

    doLogin() {
        let senha = this.myform.controls['number1'].value + '' + 
                    this.myform.controls['number2'].value + '' + 
                    this.myform.controls['number3'].value + '' + 
                    this.myform.controls['number4'].value;

        this.loginService.doLogin(this.user, senha);
        this.router.navigate(['dashboard'], { replaceUrl: true });
    }

    goBack() {
        this.router.navigate(['login'], { replaceUrl: true });
    }

    goToField(inputNumber: number) {
        if ((this.myform.controls['number1'].value + '').length === 1 && inputNumber === 2) this.number2?.nativeElement.focus();
        if ((this.myform.controls['number2'].value + '').length === 1 && inputNumber === 3) this.number3?.nativeElement.focus();
        if ((this.myform.controls['number3'].value + '').length === 1 && inputNumber === 4) this.number4?.nativeElement.focus();
    }

}
