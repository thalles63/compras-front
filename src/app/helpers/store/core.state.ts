import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext, StateToken } from "@ngxs/store";
import { DecreaseBlockCountAction, IncreaseBlockCountAction } from "./core.action";

export const CORE_STATE_TOKEN = new StateToken<CoreStateModel>("core");

export interface CoreStateModel {
    blockCount: number;
}

@State<CoreStateModel>({
    name: CORE_STATE_TOKEN,
    defaults: {
        blockCount: 0
    }
})
@Injectable()
export class CoreState {
    @Selector()
    public static blockCount(state: CoreStateModel): number {
        return state.blockCount;
    }

    @Action(IncreaseBlockCountAction)
    public increaseBlockCountAction({ getState, patchState }: StateContext<CoreStateModel>) {
        patchState({ blockCount: getState().blockCount + 1 });
    }

    @Action(DecreaseBlockCountAction)
    public decreaseBlockCountAction({ getState, patchState }: StateContext<CoreStateModel>) {
        patchState({ blockCount: getState().blockCount - 1 });
    }
}
