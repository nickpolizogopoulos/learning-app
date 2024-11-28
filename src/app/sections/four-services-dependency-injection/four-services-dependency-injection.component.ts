import { Component } from '@angular/core';

@Component({
  selector: 'app-four-services-dependency-injection',
  template: `
  
    <h2>Services & Dependency Injection - 2 Lessons.</h2>
    <section class="container-fluid">
      <div class="row mt-4 pt-4 d-flex justify-content-around">
        <app-one-logging-service />
        <app-two-data-service />
      </div>
    </section>
    
  `
})
export class FourServicesDependencyInjectionComponent {}