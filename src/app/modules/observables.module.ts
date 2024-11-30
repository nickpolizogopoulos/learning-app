import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { FiveMapOperatorComponent } from "../sections/five-observables/five-map-operator/five-map-operator.component";
import { FiveObservablesComponent } from "../sections/five-observables/five-observables.component";
import { FourObservableCompletionComponent } from "../sections/five-observables/four-observable-completion/four-observable-completion.component";
import { OneBasicObservableComponent } from "../sections/five-observables/one-basic-observable/one-basic-observable.component";
import { FirstSubjectsComponent } from "../sections/five-observables/seven-subjects/first-subjects/first-subjects.component";
import { SecondSubjectsComponent } from "../sections/five-observables/seven-subjects/second-subjects/second-subjects.component";
import { SixFilterOperatorComponent } from "../sections/five-observables/six-filter-operator/six-filter-operator.component";
import { ThreeObservableErrorsComponent } from "../sections/five-observables/three-observable-errors/three-observable-errors.component";
import { TwoCustomObservableComponent } from "../sections/five-observables/two-custom-observable/two-custom-observable.component";

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