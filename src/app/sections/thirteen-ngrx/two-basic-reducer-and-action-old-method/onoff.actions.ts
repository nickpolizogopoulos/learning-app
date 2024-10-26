import { Action } from "@ngrx/store";

export const LIGHTSON = '[Bulb] On';
export const LIGHTSOFF = '[Bulb] Off';

export class TurnLightsOff implements Action {
    
    constructor(
        public value: boolean
    ) {}

    readonly type = LIGHTSOFF;
}

export class TurnLightsOn implements Action {

    constructor(
        public value:boolean
    ) {}

    readonly type = LIGHTSON;
}

export type LightOnOrOffActions = TurnLightsOff | TurnLightsOn;