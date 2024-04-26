import { Action } from "@ngrx/store";
import { LIGHTSOFF, LIGHTSON, LightOnOrOffActions, TurnLightsOff, TurnLightsOn } from "./onoff.actions";

const initialState = true;

export const onOffReducer = ( state = initialState, action:LightOnOrOffActions | Action ):boolean => {
    if (action.type === LIGHTSON)
        return (action as TurnLightsOn).value;

    if (action.type === LIGHTSOFF)
        return (action as TurnLightsOff).value;

    return state;
}