import { Component } from '@angular/core';

@Component({
  selector: 'app-five-observables',
  template: `
  
    <h2>RxJS & Observables - 7 Lessons.</h2>
    <section class="container-fluid">
        <div class="row mt-4 pt-4 d-flex justify-content-around">
            <app-one-basic-observable class="lessonbox col-md-6 col-lg-5 col-xxl-3" />
            <app-two-custom-observable class="lessonbox col-md-6 col-lg-5 col-xxl-3" />
            <app-three-observable-errors class="lessonbox col-md-6 col-lg-5 col-xxl-3" />
            <app-four-observable-completion class="lessonbox col-md-6 col-lg-5 col-xxl-3" />
            <app-five-map-operator class="lessonbox col-md-6 col-lg-5 col-xxl-3" />
            <app-six-filter-operator class="lessonbox col-md-6 col-lg-5 col-xxl-3" />

            <app-first-subjects class="lessonbox col-md-6 col-lg-5 col-xxl-3" />
            <app-second-subjects class="lessonbox col-md-6 col-lg-5 col-xxl-3" />
        </div>
    </section>
    
  `
})
export class FiveObservablesComponent {

}