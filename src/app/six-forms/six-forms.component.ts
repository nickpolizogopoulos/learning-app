import { Component } from '@angular/core';

@Component({
  selector: 'app-six-forms',
  // templateUrl: './six-forms.component.html',
  template: `
  
    <h2><mark>Forms - 2 Lessons.</mark></h2>
    <section class="container-fluid">
      <div class="row mt-4 pt-4 d-flex justify-content-around">
          <app-one-template-driven class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-one-template-driven>
      </div>
    </section>
  
  `,
  styles: [``]
})
export class SixFormsComponent {

}
