import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { LoginService } from "../../login.service";
import { User } from "../../models/user";

@Component({
    selector: "password",
    templateUrl: "./password.component.html",
    styleUrls: ["./password.component.scss"]
})
export class PasswordComponent implements AfterViewInit, OnDestroy {
    constructor(private router: Router, private loginService: LoginService) {}

    usuarios: User[] = [];
    error = "";
    ngUnsubscribe = new Subject<void>();
    @Input() selectedUser: User = {} as User;
    @Output() selectedUserChange = new EventEmitter();
    @ViewChild("passwordField") passwordField?: ElementRef;

    ngAfterViewInit() {
        this.passwordField?.nativeElement.focus();
    }

    doLogin() {
        if (this.selectedUser.password.toString().length < 4) {
            return;
        }

        this.loginService
            .login(this.selectedUser.username, this.selectedUser.password.toString())
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe({
                next: (response) => {
                    this.selectedUser.token = response.token;
                    localStorage.setItem("usuario", JSON.stringify(this.selectedUser));
                    this.router.navigate(["dashboard"]);
                },
                error: (e) => {
                    this.error = e.error.error;
                }
            });
    }

    goBackToUserSelect() {
        this.selectedUser = {} as User;
        this.selectedUserChange.emit(this.selectedUser);
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
