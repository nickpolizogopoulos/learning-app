import {
    createReducer,
    on
} from "@ngrx/store";

import {
    decrementAction,
    incrementAction,
    resetAction
} from "./one-counter.actions";

const initialState: number = 0;

export const counterReducer = createReducer(
    initialState,
    on(incrementAction, (state, action) => state + action.value),
    on(decrementAction, (state, action) => state - action.value),
    on(resetAction, (state, action) => state = action.value)
);