import { Component } from '@angular/core';

@Component({
  selector: 'app-seven-pipes',
  template: `
  
    <h2><mark>Data Transformation with Pipes - 4 Lessons.</mark></h2>
    <section class="container-fluid">
      <div class="row mt-4 pt-4 d-flex justify-content-around">
          <app-one-simple-transformation class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-one-simple-transformation>
          <app-two-custom-pipe class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-two-custom-pipe>
          <app-three-filter-pipe class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-three-filter-pipe>
          <app-four-slug-generator class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-four-slug-generator>
      </div>
    </section>
  
  `,
  styles: [``]
})
export class SevenPipesComponent {

}