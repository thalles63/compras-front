import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoginService } from '../login.service';
import { Usuario } from '../../usuarios/usuario';

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

    usuario: Usuario = {} as Usuario;
    error: string = '';
    private ngUnsubscribe: Subject<any> = new Subject();

	ngOnInit(): void {
        this.usuario = JSON.parse(localStorage.getItem('usuario-escolhido') || '');
        this.usuario.primeiroNome = this.usuario.nome?.split(' ')[0];

        setTimeout(() => {
            this.number1?.nativeElement.focus()
        }, 500);
    }

    doLogin(senha: string, event?: any) {
        if (!!event && event.keyCode === 8) {
            this.keytab(event);
            return;
        }

        this.loginService.login(this.usuario.username, senha)
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe((response: any) => {
                this.usuario.token = response.token;
                localStorage.removeItem('usuario-escolhido');
                localStorage.setItem('usuario', JSON.stringify(this.usuario));
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
