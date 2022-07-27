import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { LoginService } from "../../login.service";
import { User } from "../../models/user";

@Component({
    selector: "user",
    templateUrl: "./user.component.html",
    styleUrls: ["./user.component.scss"]
})
export class UserComponent implements AfterViewInit, OnDestroy {
    constructor(private loginService: LoginService) {}

    users: User[] = [];
    ngUnsubscribe = new Subject<void>();
    @Input() selectedUser: User = {} as User;
    @Output() selectedUserChange = new EventEmitter();

    ngAfterViewInit(): void {
        this.loginService
            .getUsuarios()
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe((response: User[]) => {
                this.users = response;
            });
    }

    escolherUsuario(usuario: User) {
        this.selectedUser = usuario;
        this.selectedUser.primeiroNome = this.selectedUser.nome.split(" ")[0];
        this.selectedUserChange.emit(this.selectedUser);
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
