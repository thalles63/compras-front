import { Injectable } from "@angular/core";

@Injectable()
export class MenusService {
    getListaDeMenus() {
        return [
            {
                titulo: "Inicial",
                tituloSmall: "Inicial",
                icone: "la-home",
                link: "dashboard"
            },
            {
                titulo: "Gastos da Casa",
                tituloSmall: "Gastos",
                icone: "la-money-bill-wave",
                link: "gastos"
            },
            {
                titulo: "Lista de Compras",
                tituloSmall: "Lista",
                icone: "la-shopping-cart",
                link: "lista-compras"
            },
            {
                titulo: "Configurações",
                tituloSmall: "Config",
                icone: "la-cog",
                link: "configs"
            }
        ];
    }
}
