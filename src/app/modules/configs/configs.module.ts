import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ConfigsComponent } from "./components/configs.component";
import { ConfigsRoutingModule } from "./configs.routing";
import { ConfigsService } from "./configs.service";

@NgModule({
    declarations: [ConfigsComponent],
    imports: [ConfigsRoutingModule, CommonModule],
    exports: [ConfigsComponent],
    providers: [ConfigsService]
})
export class ConfigsModule {}
