import { Component } from "@angular/core";
import { Select } from "@ngxs/store";
import { Observable } from "rxjs";
import { CoreState } from "../store/core.state";

@Component({
    selector: "loading",
    templateUrl: "./loading.component.html",
    styleUrls: ["./loading.component.scss"]
})
export class LoadingComponent {
    @Select(CoreState.blockCount)
    blockCount$!: Observable<number>;
}
