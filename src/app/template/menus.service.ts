import { Injectable } from '@angular/core';

@Injectable()
export class MenusService {
	constructor() {}

	getListaDeMenus() {
        return [
            {
                titulo: 'Inicial',
                icone: 'la-home',
                link: 'dashboard'
            },
            {
                titulo: 'Compras',
                icone: 'la-shopping-cart',
                link: 'compras'
            },
            {
                titulo: 'Lista',
                icone: 'la-list-alt',
                link: 'lista'
            },
            {
                titulo: 'Config',
                icone: 'la-cog',
                link: 'config'
            },
        ]
	}

}