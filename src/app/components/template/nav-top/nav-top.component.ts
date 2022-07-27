import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenusService } from "../menus/menus.service";

@Component({
    selector: "nav-top",
    templateUrl: "./nav-top.component.html",
    styleUrls: ["./nav-top.component.scss"]
})
export class NavTopComponent implements OnInit {
    constructor(public menusService: MenusService, private router: Router) {}

    listaMenus: any = [];

    ngOnInit(): void {
        this.listaMenus = this.menusService.getListaDeMenus();
    }

    getLinkTela(link: string) {
        return `/${link}` === this.router.url;
    }

    goTo(item: any) {
        this.router.navigate([item.link], { replaceUrl: true });
    }
}
