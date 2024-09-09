import { Component } from '@angular/core';

@Component({
  selector: 'app-four-services-dependency-injection',
  template: `
  
    <h2>Services & Dependency Injection - 2 Lessons.</h2>
    <section class="container-fluid">
        <div class="row mt-4 pt-4 d-flex justify-content-around">
            <app-one-logging-service class="lessonbox col-md-6 col-lg-5 col-xxl-3" />
            <app-two-data-service class="lessonbox col-md-6 col-lg-5 col-xxl-3" />
        </div>
    </section>
    
  `,
  styles: [``]
})
export class FourServicesDependencyInjectionComponent {

}
