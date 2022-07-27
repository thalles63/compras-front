import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { MenusService } from "./menus/menus.service";
import { NavBottomComponent } from "./nav-bottom/nav-bottom.component";
import { NavTopComponent } from "./nav-top/nav-top.component";
import { TemplateComponent } from "./template.component";

@NgModule({
    declarations: [NavBottomComponent, NavTopComponent, TemplateComponent],
    imports: [CommonModule, RouterModule],
    exports: [TemplateComponent],
    providers: [MenusService]
})
export class TemplateModule {}
