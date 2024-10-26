import {
  createReducer,
  on
} from "@ngrx/store";

import {
  macSelected,
  noneSelected,
  windowsSelected
} from "./macWindows.actions";

const initialState = 'empty';

export const macWindowsReducer = createReducer(
    initialState,
    on(noneSelected, () => 'empty'),
    on(windowsSelected, (state, { value }) => value),
    on(macSelected, (state, { value }) => value)
  );