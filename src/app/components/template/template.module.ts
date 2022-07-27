import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PageContainerModule } from "../page-container/page-container.module";
import { MenusService } from "./menus/menus.service";
import { NavBottomComponent } from "./nav-bottom/nav-bottom.component";
import { NavTopComponent } from "./nav-top/nav-top.component";
import { TemplateComponent } from "./template.component";

@NgModule({
    declarations: [NavBottomComponent, NavTopComponent, TemplateComponent],
    imports: [CommonModule, RouterModule, PageContainerModule],
    exports: [TemplateComponent],
    providers: [MenusService]
})
export class TemplateModule {}
