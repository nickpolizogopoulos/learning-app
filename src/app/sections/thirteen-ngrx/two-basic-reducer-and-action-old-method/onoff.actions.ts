import { Action } from "@ngrx/store";

export const LIGHTSON = '[Bulb] On';
export const LIGHTSOFF = '[Bulb] Off';

export class TurnLightsOff implements Action {
    readonly type = LIGHTSOFF;
    constructor( public value:boolean ) {}
}

export class TurnLightsOn implements Action {
    readonly type = LIGHTSON;
    constructor( public value:boolean ) {}
}

export type LightOnOrOffActions = TurnLightsOff | TurnLightsOn;