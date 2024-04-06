import { Component } from '@angular/core';
import { OneStandaloneComponent } from './one-standalone/one-standalone.component';
import { TwoStandaloneComponent } from './two-standalone/two-standalone.component';

@Component({
  selector: 'app-eleven-standalone-components',
  standalone: true,
  imports: [OneStandaloneComponent, TwoStandaloneComponent],
  template: `
  
    <h2><mark>Standalone Components - 1 Lesson</mark>
    </h2>
    <section class="container-fluid">
      <div class="row mt-4 pt-4 d-flex justify-content-around">
        <app-one-standalone class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-one-standalone>
        <app-two-standalone class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-two-standalone>
      </div>
    </section> 
  
  `,
  styles: [``]
})
export class ElevenStandaloneComponentsComponent {

}
