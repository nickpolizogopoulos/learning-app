import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { FiveMapOperatorComponent } from "./five-map-operator/five-map-operator.component";
import { FiveObservablesComponent } from "./five-observables.component";
import { FourObservableCompletionComponent } from "./four-observable-completion/four-observable-completion.component";
import { OneBasicObservableComponent } from "./one-basic-observable/one-basic-observable.component";
import { FirstSubjectsComponent } from "./seven-subjects/first-subjects/first-subjects.component";
import { SecondSubjectsComponent } from "./seven-subjects/second-subjects/second-subjects.component";
import { SixFilterOperatorComponent } from "./six-filter-operator/six-filter-operator.component";
import { ThreeObservableErrorsComponent } from "./three-observable-errors/three-observable-errors.component";
import { TwoCustomObservableComponent } from "./two-custom-observable/two-custom-observable.component";

@NgModule({
    declarations: [
        FiveObservablesComponent,
        OneBasicObservableComponent,
        TwoCustomObservableComponent,
        ThreeObservableErrorsComponent,
        FourObservableCompletionComponent,
        FiveMapOperatorComponent,
        SixFilterOperatorComponent,
        FirstSubjectsComponent,
        SecondSubjectsComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class ObservablesModule {}










// @NgModule({
//     declarations: [

//     ],
//     imports: [

//     ]
// })
// export class Module {}