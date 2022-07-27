import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ConfirmationModal } from "./confirmationModal/confirmationModal.component";
import { LoadingComponent } from "./loading/loading.component";
import { PanelComponent } from "./panel/panel.component";

@NgModule({
    declarations: [PanelComponent, ConfirmationModal, LoadingComponent],
    imports: [CommonModule],
    exports: [PanelComponent, LoadingComponent, ConfirmationModal]
})
export class ComponentsModule {}
