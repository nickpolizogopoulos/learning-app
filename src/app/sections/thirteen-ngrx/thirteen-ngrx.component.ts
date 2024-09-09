import { Component } from '@angular/core';

@Component({
  selector: 'app-thirteen-ngrx',
  template: `
  
    <h2>NgRx - 4 Lessons. 
      <span class="lead">
        [ Exercises 1, 2, and 3 will retain their state when a user changes routes 
        but will lose the state upon reloading the page. ]
      </span>
    </h2>
    <section class="container-fluid">
      <div class="row mt-4 pt-4 d-flex justify-content-around">
          <app-one-basic-reducer-and-action class="lessonbox col-md-6 col-lg-5 col-xxl-3" />
          <app-two-basic-reducer-and-action-old-method class="lessonbox col-md-6 col-lg-5 col-xxl-3" />
          <app-three-selector class="lessonbox col-md-6 col-lg-5 col-xxl-3" />
          <app-four-effect class="lessonbox col-md-6 col-lg-5 col-xxl-3" />
          
      </div>
    </section>
  
  `,
  styles: [``]
})
export class ThirteenNgrxComponent {

}
