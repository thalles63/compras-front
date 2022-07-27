import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ComprasListModule } from "src/app/components/compras-list/compras-list.module";
import { DashboardActionPanelComponent } from "./action-panel/action-panel.component";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "./dashboard.routing";
import { DashboardService } from "./dashboard.service";
import { DashboardHeaderComponent } from "./header/header.component";

@NgModule({
    declarations: [DashboardComponent, DashboardHeaderComponent, DashboardActionPanelComponent],
    imports: [DashboardRoutingModule, CommonModule, ComprasListModule],
    exports: [DashboardComponent],
    providers: [DashboardService],
    bootstrap: []
})
export class DashboardModule {}
