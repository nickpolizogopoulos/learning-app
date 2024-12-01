import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { CustomAlertComponent } from "./one-using-ngif/custom-alert.component";
import { LineLoaderComponent } from "./one-using-ngif/line-loader.component";
import { LoaderSpinnerComponent } from "./one-using-ngif/loader-spinner.component";
import { OneUsingNgifComponent } from "./one-using-ngif/one-using-ngif.component";
import { TenDynamicComponentsComponent } from "./ten-dynamic-components.component";
import { PlaceholderDirective } from "./two-programmatically/placeholder.directive";
import { ProgAlertComponent } from "./two-programmatically/prog-alert.component";
import { TwoProgrammaticallyComponent } from "./two-programmatically/two-programmatically.component";

@NgModule({
    declarations: [
        TenDynamicComponentsComponent,
        OneUsingNgifComponent,
        TwoProgrammaticallyComponent,
        LoaderSpinnerComponent,
        CustomAlertComponent,
        LineLoaderComponent,
        ProgAlertComponent,
        PlaceholderDirective,
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class DynamicComponentsModule {}