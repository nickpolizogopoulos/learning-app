import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SignalComponent } from "./signal/signal.component";
import { TwelveSignalsComponent } from "./twelve-signals.component";

@NgModule({
    declarations: [
        TwelveSignalsComponent,
        SignalComponent,
    ],
    imports: [
        CommonModule
    ]
})
export class SignalsModule {}