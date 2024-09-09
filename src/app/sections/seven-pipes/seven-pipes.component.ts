import { Component } from '@angular/core';

@Component({
  selector: 'app-seven-pipes',
  template: `
  
    <h2>Data Transformation with Pipes - 4 Lessons.</h2>
    <section class="container-fluid">
      <div class="row mt-4 pt-4 d-flex justify-content-around">
          <app-one-simple-transformation />
          <app-two-custom-pipe />
          <app-three-filter-pipe />
          <app-four-slug-generator />
      </div>
    </section>
  
  `,
  styles: [``]
})
export class SevenPipesComponent {

}
