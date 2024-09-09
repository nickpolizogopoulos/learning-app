import { Component } from '@angular/core';

@Component({
  selector: 'app-five-observables',
  template: `
  
    <h2>RxJS & Observables - 7 Lessons.</h2>
    <section class="container-fluid">
        <div class="row mt-4 pt-4 d-flex justify-content-around">
            <app-one-basic-observable  />
            <app-two-custom-observable  />
            <app-three-observable-errors  />
            <app-four-observable-completion  />
            <app-five-map-operator  />
            <app-six-filter-operator  />

            <app-first-subjects />
            <app-second-subjects />
        </div>
    </section>
    
  `
})
export class FiveObservablesComponent {

}