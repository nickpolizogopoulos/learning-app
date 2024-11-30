import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ColoursDirective } from "../sections/three-directives/five-binding-to-directive-properties/colours.directive";
import { FiveBindingToDirectivePropertiesComponent } from "../sections/three-directives/five-binding-to-directive-properties/five-binding-to-directive-properties.component";
import { FourHostbindingComponent } from "../sections/three-directives/four-hostbinding/four-hostbinding.component";
import { SecretButtonDirective } from "../sections/three-directives/four-hostbinding/secret-button.directive";
import { BlueBgDirective } from "../sections/three-directives/one-basic-custom-directive/blue-bg.directive";
import { BordeauxBgDirective } from "../sections/three-directives/one-basic-custom-directive/bordeaux-bg.directive";
import { OneBasicCustomDirectiveComponent } from "../sections/three-directives/one-basic-custom-directive/one-basic-custom-directive.component";
import { SevenNgswitchComponent } from "../sections/three-directives/seven-ngswitch/seven-ngswitch.component";
import { SixCustomStructuralDirectiveComponent } from "../sections/three-directives/six-custom-structural-directive/six-custom-structural-directive.component";
import { UnlessDirective } from "../sections/three-directives/six-custom-structural-directive/unless.directive";
import { ThreeDirectivesComponent } from "../sections/three-directives/three-directives.component";
import { GreenFilterDirective } from "../sections/three-directives/three-hostlistener/green-filter.directive";
import { ThreeHostlistenerComponent } from "../sections/three-directives/three-hostlistener/three-hostlistener.component";
import { YellowFilterDirective } from "../sections/three-directives/three-hostlistener/yellow-filter.directive";
import { MdSizeDirective } from "../sections/three-directives/two-renderer-directive/md-size.directive";
import { SmSizeDirective } from "../sections/three-directives/two-renderer-directive/sm-size.directive";
import { TwoRendererDirectiveComponent } from "../sections/three-directives/two-renderer-directive/two-renderer-directive.component";
import { XlSizeDirective } from "../sections/three-directives/two-renderer-directive/xl-size.directive";

@NgModule({
    declarations: [
        ThreeDirectivesComponent,
        OneBasicCustomDirectiveComponent,
        BlueBgDirective,
        BordeauxBgDirective,
        TwoRendererDirectiveComponent,
        SmSizeDirective,
        MdSizeDirective,
        XlSizeDirective,
        ThreeHostlistenerComponent,
        GreenFilterDirective,
        YellowFilterDirective,
        FourHostbindingComponent,
        SecretButtonDirective,
        FiveBindingToDirectivePropertiesComponent,
        ColoursDirective,
        SixCustomStructuralDirectiveComponent,
        UnlessDirective,
        SevenNgswitchComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class DirectivesModule {}