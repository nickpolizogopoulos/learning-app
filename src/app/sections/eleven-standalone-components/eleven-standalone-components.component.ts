import { Component } from '@angular/core';

import { OneStandaloneComponent } from './one-standalone/one-standalone.component';
import { TwoStandaloneComponent } from './two-standalone/two-standalone.component';

@Component({
  selector: 'app-eleven-standalone-components',
  standalone: true,
  imports: [
    OneStandaloneComponent,
    TwoStandaloneComponent
  ],
  template: `
  
    <h2>Standalone Components - 1 Lesson</h2>
    <section class="container-fluid">
      <div class="row mt-4 pt-4 d-flex justify-content-around">
        <app-one-standalone />
        <app-two-standalone />
      </div>
    </section> 
  
  `
})
export class ElevenStandaloneComponentsComponent {}