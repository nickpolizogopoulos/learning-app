import {
    createAction,
    props
} from "@ngrx/store";

type ActionProps = {
    value:string;
}

const noneSelect: string = '[macVSwindows] None';
const windowsSelect: string = '[macVSwindows] Windows';
const macSelect: string = '[macVSwindows] Mac';

export const noneSelected = createAction(
    noneSelect,
);

export const windowsSelected = createAction(
    windowsSelect,
    props<ActionProps>()
);

export const macSelected = createAction(
    macSelect,
    props<ActionProps>()
);