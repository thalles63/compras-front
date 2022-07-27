import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Usuario } from "../../usuarios/usuario";
import { LoginService } from "../login.service";

@Component({
    templateUrl: "./password.component.html",
    styleUrls: ["./password.component.scss"]
})
export class LoginPasswordComponent implements AfterViewInit, OnDestroy {
    constructor(private router: Router, private loginService: LoginService) {}

    @ViewChild("passwordField") passwordField?: ElementRef;
    @ViewChild("myform") myform!: NgForm;

    usuario: Usuario = {} as Usuario;
    password = "";
    error = "";
    ngUnsubscribe = new Subject<void>();

    ngAfterViewInit(): void {
        this.usuario = JSON.parse(localStorage.getItem("usuario-escolhido") || "");
        this.usuario.primeiroNome = this.usuario.nome?.split(" ")[0];
        this.passwordField?.nativeElement.focus();
    }

    doLogin() {
        if (this.password.toString().length < 4) {
            return;
        }

        this.loginService
            .login(this.usuario.username, this.password.toString())
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe({
                next: (response) => {
                    this.usuario.token = response.token;
                    localStorage.removeItem("usuario-escolhido");
                    localStorage.setItem("usuario", JSON.stringify(this.usuario));
                    this.router.navigate(["dashboard"]);
                },
                error: (e) => {
                    this.error = e.error.error;
                }
            });
    }

    goBack() {
        this.router.navigate(["login"]);
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
