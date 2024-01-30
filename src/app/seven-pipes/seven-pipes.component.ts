import { Component } from '@angular/core';

@Component({
  selector: 'app-seven-pipes',
  template: `
  
    <h2><mark>Data Transformation with Pipes - X Lessons.</mark></h2>
    <section class="container-fluid">
      <div class="row mt-4 pt-4 d-flex justify-content-around">
          <app-one-simple-transformation class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-one-simple-transformation>
      </div>
    </section>
  
  `,
  styles: [``]
})
export class SevenPipesComponent {

}
