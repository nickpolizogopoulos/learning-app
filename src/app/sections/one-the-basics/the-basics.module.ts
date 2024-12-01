import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { EightNgClassComponent } from "./eight-ng-class/eight-ng-class.component";
import { FiveNgIfElseComponent } from "./five-ng-if-else/five-ng-if-else.component";
import { FourNgIfComponent } from "./four-ng-if/four-ng-if.component";
import { NineThankYouComponent } from "./nine-thank-you/nine-thank-you.component";
import { OneDataBindingComponent } from "./one-data-binding/one-data-binding.component";
import { OneTheBasicsComponent } from "./one-the-basics.component";
import { SevenNgStyleComponent } from "./seven-ng-style/seven-ng-style.component";
import { SixNgForComponent } from "./six-ng-for/six-ng-for.component";
import { ThreeEventBindingComponent } from "./three-event-binding/three-event-binding.component";
import { TwoPropertyBindingComponent } from "./two-property-binding/two-property-binding.component";

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