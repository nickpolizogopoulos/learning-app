import { NgModule } from "@angular/core";

import { TheBasicsModule } from "./one-the-basics/the-basics.module";
import { ComponentsDatabindingModule } from "./two-components-databinding/components-databinding.module";
import { DirectivesModule } from "./three-directives/directives.module";
import { ServicesDependencyInjectionModule } from "./four-services-dependency-injection/services-dependency-injection.module";
import { ObservablesModule } from "./five-observables/observables.module";
import { TdReactiveFormsModule } from "./six-forms/td-reactive-forms.module";
import { PipesModule } from "./seven-pipes/pipes.module";
import { HttpRequestsModule } from "./eight-http-requests/http-requests.module";
import { AuthenticationModule } from "./nine-authentication-route-protection/authentication.module";
import { DynamicComponentsModule } from "./ten-dynamic-components/dynamic-components.module";
import { SignalsModule } from "./twelve-signals/signals.module";
import { NgrxModule } from "./thirteen-ngrx/ngrx.module";
import { AnimationsModule } from "./fourteen-animations/animations.module";

@NgModule({
    imports: [
        TheBasicsModule,
        ComponentsDatabindingModule,
        DirectivesModule,
        ServicesDependencyInjectionModule,
        ObservablesModule,
        TdReactiveFormsModule,
        PipesModule,
        HttpRequestsModule,
        AuthenticationModule,
        DynamicComponentsModule,
        SignalsModule,
        AnimationsModule,
        NgrxModule
    ]
})
export class AngularSectionsModule {}