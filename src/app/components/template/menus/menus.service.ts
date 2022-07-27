import { Injectable } from "@angular/core";

@Injectable()
export class MenusService {
    getListaDeMenus() {
        return [
            {
                titulo: "Inicial",
                icone: "la-home",
                link: "dashboard"
            },
            {
                titulo: "Gastos",
                icone: "la-money-bill-wave",
                link: "gastos"
            },
            {
                titulo: "Lista",
                icone: "la-shopping-cart",
                link: "lista-compras"
            },
            {
                titulo: "Config",
                icone: "la-cog",
                link: "configs"
            }
        ];
    }
}
