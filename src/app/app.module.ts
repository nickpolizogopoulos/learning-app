import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { TheBasicsComponent } from './the-basics/the-basics.component';
import { OneDataBindingComponent } from './the-basics/one-data-binding/one-data-binding.component';
import { TwoPropertyBindingComponent } from './the-basics/two-property-binding/two-property-binding.component';
import { ThreeEventBindingComponent } from './the-basics/three-event-binding/three-event-binding.component';
import { FourNgIfComponent } from './the-basics/four-ng-if/four-ng-if.component';
import { FiveNgIfElseComponent } from './the-basics/five-ng-if-else/five-ng-if-else.component';
import { SixNgForComponent } from './the-basics/six-ng-for/six-ng-for.component';
import { SevenNgStyleComponent } from './the-basics/seven-ng-style/seven-ng-style.component';
import { EightNgClassComponent } from './the-basics/eight-ng-class/eight-ng-class.component';
import { NineThankYouComponent } from './the-basics/nine-thank-you/nine-thank-you.component';

@NgModule({
  declarations: [
    AppComponent,
    TheBasicsComponent,
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
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
