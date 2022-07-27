import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ComprasListComponent } from "./compras-list.component";

@NgModule({
    declarations: [ComprasListComponent],
    imports: [CommonModule],
    exports: [ComprasListComponent]
})
export class ComprasListModule {}
