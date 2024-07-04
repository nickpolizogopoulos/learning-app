import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { createAction, props, createReducer, on, createSelector, Store } from "@ngrx/store";
import { switchMap, of, withLatestFrom, tap } from "rxjs";

interface Value {
    value:number;
}

export interface Counter {
    fourCounter:number;
  }

const initialState:number = 0;

//* ================= ACTIONS =================
export const init = createAction(
    '[Counter] Init',
);

export const set = createAction(
    '[Counter] Set',
    props<Value>()
);

export const increment = createAction(
    '[Counter] Increment',
    props<Value>()
);

export const decrement = createAction(
    '[Counter] Decrement',
    props<Value>()
);

export const reset = createAction(
    '[Counter] Reset',
    props<Value>()
);

//* ================= REDUCER =================
export const fourCounterReducer = createReducer(
    initialState,
    on(increment, (state, action) => state + action.value ),
    on(decrement, (state, action) => state - action.value ),
    on(reset, (state, action) => state = action.value ),
    on(set, (state, action) => action.value )
);


//* ================ SELECTOR ================
export const selectCount = ( state:Counter ) => state.fourCounter;

export const selectDoubleCount = createSelector(
    selectCount,
    state => state * 2
);

//* ================ EFFECTS =================

@Injectable()
export class CounterEffects {
    constructor(
        private actions$:Actions,
        private store:Store<Counter>
    ) {}

    loadCount = createEffect(
        () =>
            this.actions$.pipe(
                ofType(init),
                switchMap(() => {
                    const storedCounter = localStorage.getItem('count');
                    if (storedCounter)
                        return of( set({value: +storedCounter}) );
                    return of( set({value: 0}) );
                })
            )
    );
    
    saveCount = createEffect(
        () => 
            this.actions$.pipe(
                ofType(increment, decrement, reset),
                withLatestFrom( this.store.select(selectCount)),
                tap(([action, counter]) => {
                    // console.log(action.type + ': --- ' + 'Count', counter.toString());
                    localStorage.setItem('count', counter.toString());
                })
            ),
            {dispatch:false}
    );      
}

