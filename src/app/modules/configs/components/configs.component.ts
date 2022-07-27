import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { AuthService } from "src/app/helpers/services/auth.service";
import { ConfigsService } from "../configs.service";
import { Configs } from "../models/config";

@Component({
    templateUrl: "./configs.component.html",
    styleUrls: ["./configs.component.scss"]
})
export class ConfigsComponent implements OnInit {
    constructor(private authService: AuthService, private configsService: ConfigsService, private router: Router) {}

    public configs: Configs = {} as Configs;
    private ngUnsubscribe: Subject<void> = new Subject();

    ngOnInit(): void {
        this.configsService
            .get(this.authService.getUsuario().id)
            .pipe(takeUntil(this.ngUnsubscribe))
            .subscribe((response: Configs) => {
                this.configs = response;
            });
    }

    increaseValue() {
        this.configs.porcentagem += 5;

        this.configsService.edit(this.configs).pipe(takeUntil(this.ngUnsubscribe)).subscribe();
    }

    decreaseValue() {
        this.configs.porcentagem -= 5;

        this.configsService.edit(this.configs).pipe(takeUntil(this.ngUnsubscribe)).subscribe();
    }

    logout() {
        this.authService.logout();
        this.router.navigate(["login"], { replaceUrl: true });
    }

    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
}
