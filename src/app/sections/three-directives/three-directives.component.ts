import { Component } from '@angular/core';

@Component({
  selector: 'app-three-directives',
  template: `
  

    <h2><mark>Directives Deep Dive - 7 Lessons.</mark></h2>
    <section class="container-fluid">
        <div class="row mt-4 pt-4 d-flex justify-content-around">
            <app-one-basic-custom-directive class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-one-basic-custom-directive>
            <app-two-renderer-directive class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-two-renderer-directive>
            <app-three-hostlistener class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-three-hostlistener>
            <app-four-hostbinding class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-four-hostbinding>
            <app-five-binding-to-directive-properties class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-five-binding-to-directive-properties>
            <app-six-custom-structural-directive class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-six-custom-structural-directive>
            <app-seven-ngswitch class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-seven-ngswitch>

        </div>
    </section>
  
  `,
  styles: [``]
})
export class ThreeDirectivesComponent {

}