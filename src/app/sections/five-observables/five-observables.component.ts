import { Component } from '@angular/core';

@Component({
  selector: 'app-five-observables',
  template: `
  
    <h2><mark>Observables - 7 Lessons.</mark></h2>
    <section class="container-fluid">
        <div class="row mt-4 pt-4 d-flex justify-content-around">
            <app-one-basic-observable class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-one-basic-observable>
            <app-two-custom-observable class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-two-custom-observable>
            <app-three-observable-errors class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-three-observable-errors>
            <app-four-observable-completion class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-four-observable-completion>
            <app-five-map-operator class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-five-map-operator>
            <app-six-filter-operator class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-six-filter-operator>

            <app-first-subjects class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-first-subjects>
            <app-second-subjects class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-second-subjects>
        </div>
    </section>
    
  `
})
export class FiveObservablesComponent {

}