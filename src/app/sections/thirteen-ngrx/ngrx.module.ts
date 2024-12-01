import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { fourCounterReducer, CounterEffects } from "./four-effect/store-all-in-one";
import { counterReducer } from "./one-basic-reducer-and-action/one-counter.reducer";
import { macWindowsReducer } from "./three-selector/macWindows.reducer";
import { onOffReducer } from "./two-basic-reducer-and-action-old-method/onoff.reducer";

import { FourEffectComponent } from "./four-effect/four-effect.component";
import { OneBasicReducerAndActionComponent } from "./one-basic-reducer-and-action/one-basic-reducer-and-action.component";
import { ThirteenNgrxComponent } from "./thirteen-ngrx.component";
import { ThreeSelectorComponent } from "./three-selector/three-selector.component";
import { TwoBasicReducerAndActionOldMethodComponent } from "./two-basic-reducer-and-action-old-method/two-basic-reducer-and-action-old-method.component";

@NgModule({
    declarations: [
        ThirteenNgrxComponent,
        OneBasicReducerAndActionComponent,
        TwoBasicReducerAndActionOldMethodComponent,
        ThreeSelectorComponent,
        FourEffectComponent
    ],
    imports: [
        CommonModule,
        FormsModule,

        StoreModule.forRoot({
            oneCounter: counterReducer,
            onOffState: onOffReducer,
            macVSwindows: macWindowsReducer,
            fourCounter: fourCounterReducer,
        }),
        
        EffectsModule.forRoot([
            CounterEffects
        ])
    ]
})
export class NgrxModule {}