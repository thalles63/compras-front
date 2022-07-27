import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ComponentsModule } from "src/app/components/components.module";
import { FilterPipe } from "src/app/helpers/pipes/filter.pipe";
import { ListaComprasComponent } from "./components/lista-compras.component";
import { ListaComprasRoutingModule } from "./lista-compras.routing";
import { ListaComprasService } from "./lista-compras.service";

@NgModule({
    declarations: [ListaComprasComponent, FilterPipe],
    imports: [ListaComprasRoutingModule, CommonModule, FormsModule, ComponentsModule],
    exports: [ListaComprasComponent],
    providers: [ListaComprasService]
})
export class ListaComprasModule {}
