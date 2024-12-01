import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { CustomButtonComponent } from "./custom-button.component";
import { FooterComponent } from "./footer.component";
import { NavbarComponent } from "./navbar.component";

@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent,
        CustomButtonComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        CustomButtonComponent,
        NavbarComponent,
        FooterComponent
    ]
})
export class FeatureComponentsModule {}