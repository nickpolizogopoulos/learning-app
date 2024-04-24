import { createAction, props } from "@ngrx/store";

interface ActionProps {
    value:number;
}

const oneINCREMENT:string = '[oneCounter] Increment';
const oneDECREMENT:string = '[oneCounter] Decrement';
const oneRESET:string = '[oneCounter] Reset';

export const incrementAction = createAction(
    oneINCREMENT,
    props<ActionProps>()
);

export const decrementAction = createAction(
    oneDECREMENT,
    props<ActionProps>()
);

export const resetAction = createAction(
    oneRESET,
    props<ActionProps>()
);