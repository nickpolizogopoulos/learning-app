import { Component } from '@angular/core';

@Component({
  selector: 'app-thirteen-ngrx',
  template: `
  
    <h2><mark>NgRx - X Lessons.</mark></h2>
    <section class="container-fluid">
      <div class="row mt-4 pt-4 d-flex justify-content-around">
          <app-one-basic-reducer-and-action class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-one-basic-reducer-and-action>
          <app-two-basic-reducer-and-action-old-method class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-two-basic-reducer-and-action-old-method>
          <app-three-selector class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-three-selector>
          
      </div>
    </section>
  
  `,
  styles: [``]
})
export class ThirteenNgrxComponent {

}
