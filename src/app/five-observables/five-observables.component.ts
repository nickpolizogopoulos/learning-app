import { Component } from '@angular/core';

@Component({
  selector: 'app-five-observables',
  template: `
  
  <h2><mark>Observables - X Lessons.</mark></h2>
  <section class="container-fluid">
      <div class="row mt-4 pt-4 d-flex justify-content-around">
          <app-one-basic-observable class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-one-basic-observable>
          <app-two-custom-observable class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-two-custom-observable>
          <app-three-errors-completion class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-three-errors-completion>
      </div>
  </section>
  
  
  `,
  styles: [``]
})
export class FiveObservablesComponent {

}
