import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { EightNgClassComponent } from "../sections/one-the-basics/eight-ng-class/eight-ng-class.component";
import { FiveNgIfElseComponent } from "../sections/one-the-basics/five-ng-if-else/five-ng-if-else.component";
import { FourNgIfComponent } from "../sections/one-the-basics/four-ng-if/four-ng-if.component";
import { NineThankYouComponent } from "../sections/one-the-basics/nine-thank-you/nine-thank-you.component";
import { OneDataBindingComponent } from "../sections/one-the-basics/one-data-binding/one-data-binding.component";
import { OneTheBasicsComponent } from "../sections/one-the-basics/one-the-basics.component";
import { SevenNgStyleComponent } from "../sections/one-the-basics/seven-ng-style/seven-ng-style.component";
import { SixNgForComponent } from "../sections/one-the-basics/six-ng-for/six-ng-for.component";
import { ThreeEventBindingComponent } from "../sections/one-the-basics/three-event-binding/three-event-binding.component";
import { TwoPropertyBindingComponent } from "../sections/one-the-basics/two-property-binding/two-property-binding.component";

@NgModule({
    declarations: [
        OneTheBasicsComponent,
        OneDataBindingComponent,
        TwoPropertyBindingComponent,
        ThreeEventBindingComponent,
        FourNgIfComponent,
        FiveNgIfElseComponent,
        SixNgForComponent,
        SevenNgStyleComponent,
        EightNgClassComponent,
        NineThankYouComponent
    ],
    imports: [
      CommonModule,
      FormsModule
    ]
  })
  export class TheBasicsModule {}