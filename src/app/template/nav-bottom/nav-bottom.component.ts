import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenusService } from '../menus.service';

@Component({
    selector: 'nav-bottom',
	templateUrl: './nav-bottom.component.html',
	styleUrls: [ './nav-bottom.component.scss' ]
})
export class NavBottomComponent implements OnInit {
	constructor(
        public menusService: MenusService,
        private router: Router
	) {}

    listaMenus: any = [];

	ngOnInit(): void {
        this.listaMenus = this.menusService.getListaDeMenus();
    }

    getLinkTela(link: string) {
        return ('/' + link === this.router.url);
    }

    goTo(item: any) {
        this.router.navigate([item.link], { replaceUrl: true });
    }
}
