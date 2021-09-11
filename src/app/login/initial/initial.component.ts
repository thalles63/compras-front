import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { UsuariosService } from '../../usuarios/usuario.service';
import { LoginService } from '../login.service';
import { Usuario } from '../../usuarios/usuario';

@Component({
	templateUrl: './initial.component.html',
	styleUrls: [ './initial.component.scss' ]
})
export class LoginComponent implements AfterViewInit, OnDestroy {
	constructor(
		private router: Router,
        private usuariosService: UsuariosService,
        private loginService: LoginService
	) {}

    usuarios: Usuario[] = []
    private ngUnsubscribe: Subject<any> = new Subject();

	ngAfterViewInit(): void {
        this.usuariosService.getUsuarios()
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe((response: Usuario[]) => {
                this.usuarios = response;
            });
    }

    escolherUsuario(usuario: Usuario) {
        this.loginService.escolherUsuario(usuario);
        this.router.navigate(['login/password'], { replaceUrl: true });
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
