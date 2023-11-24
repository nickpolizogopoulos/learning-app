import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { IfForDirectivesComponent } from './if-for-directives/if-for-directives.component';
import { IfElseDirectiveComponent } from './if-else-directive/if-else-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    IfForDirectivesComponent,
    IfElseDirectiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
