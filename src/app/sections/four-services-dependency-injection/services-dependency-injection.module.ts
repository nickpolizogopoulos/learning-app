import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { FourServicesDependencyInjectionComponent } from "./four-services-dependency-injection.component";
import { OneLoggingServiceComponent } from "./one-logging-service/one-logging-service.component";
import { OneServiceButtonComponent } from "./one-logging-service/one-service-button/one-service-button.component";
import { ThreeServiceButtonComponent } from "./one-logging-service/three-service-button/three-service-button.component";
import { TwoServiceButtonComponent } from "./one-logging-service/two-service-button/two-service-button.component";
import { FormDataServiceComponent } from "./two-data-service/form-data-service/form-data-service.component";
import { ListDataServiceComponent } from "./two-data-service/list-data-service/list-data-service.component";
import { TwoDataServiceComponent } from "./two-data-service/two-data-service.component";

@NgModule({
    declarations: [
        FourServicesDependencyInjectionComponent,
        OneLoggingServiceComponent,
        OneServiceButtonComponent,
        TwoServiceButtonComponent,
        ThreeServiceButtonComponent,
        TwoDataServiceComponent,
        FormDataServiceComponent,
        ListDataServiceComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class ServicesDependencyInjectionModule {}