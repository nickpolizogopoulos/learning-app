import { Component } from '@angular/core';

@Component({
  selector: 'app-two-components-databinding',
  template: `
  
    <h2>Components & Databinding - 2 Lessons.</h2>
    <section class="container-fluid">
        <div class="row ms-2 mt-4 pt-4 d-flex justify-content-around">
            <app-one-passing-data-between-components />
            <div class="divline mb-5"></div>
            <app-two-viewchild-and-local-references />
        </div>
    </section>  
  
  `,
  styles: [``]
})
export class TwoComponentsDatabindingComponent {
  
}
