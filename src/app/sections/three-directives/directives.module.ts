import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ColoursDirective } from "./five-binding-to-directive-properties/colours.directive";
import { FiveBindingToDirectivePropertiesComponent } from "./five-binding-to-directive-properties/five-binding-to-directive-properties.component";
import { FourHostbindingComponent } from "./four-hostbinding/four-hostbinding.component";
import { SecretButtonDirective } from "./four-hostbinding/secret-button.directive";
import { BlueBgDirective } from "./one-basic-custom-directive/blue-bg.directive";
import { BordeauxBgDirective } from "./one-basic-custom-directive/bordeaux-bg.directive";
import { OneBasicCustomDirectiveComponent } from "./one-basic-custom-directive/one-basic-custom-directive.component";
import { SevenNgswitchComponent } from "./seven-ngswitch/seven-ngswitch.component";
import { SixCustomStructuralDirectiveComponent } from "./six-custom-structural-directive/six-custom-structural-directive.component";
import { UnlessDirective } from "./six-custom-structural-directive/unless.directive";
import { ThreeDirectivesComponent } from "./three-directives.component";
import { GreenFilterDirective } from "./three-hostlistener/green-filter.directive";
import { ThreeHostlistenerComponent } from "./three-hostlistener/three-hostlistener.component";
import { YellowFilterDirective } from "./three-hostlistener/yellow-filter.directive";
import { MdSizeDirective } from "./two-renderer-directive/md-size.directive";
import { SmSizeDirective } from "./two-renderer-directive/sm-size.directive";
import { TwoRendererDirectiveComponent } from "./two-renderer-directive/two-renderer-directive.component";
import { XlSizeDirective } from "./two-renderer-directive/xl-size.directive";

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