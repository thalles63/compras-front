import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ComponentsModule } from "src/app/components/components.module";
import { ComprasListModule } from "src/app/components/compras-list/compras-list.module";
import { AuthService } from "src/app/helpers/services/auth.service";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "./dashboard.routing";
import { DashboardService } from "./dashboard.service";
import { DashboardHeaderComponent } from "./mobile-header/mobile-header.component";

@NgModule({
    declarations: [DashboardComponent, DashboardHeaderComponent],
    imports: [DashboardRoutingModule, CommonModule, ComprasListModule, ComponentsModule],
    exports: [DashboardComponent],
    providers: [DashboardService, AuthService]
})
export class DashboardModule {}
