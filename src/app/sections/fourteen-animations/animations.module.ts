import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { FourteenAnimationsComponent } from "./fourteen-animations.component";
import { OneBasicAnimationComponent } from "./one-basic-animation/one-basic-animation.component";
import { TwoVoidStateComponent } from "./two-void-state/two-void-state.component";

@NgModule({
    declarations: [
        FourteenAnimationsComponent,
        OneBasicAnimationComponent,
        TwoVoidStateComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
    ]
})
export class AnimationsModule {}