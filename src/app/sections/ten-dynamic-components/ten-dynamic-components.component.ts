import { Component } from '@angular/core';

@Component({
  selector: 'app-ten-dynamic-components',
  template: `
  
    <h2>Dynamic Components - 2 Lessons.</h2>
    <section class="container-fluid">
        <div class="row mt-4 pt-4 d-flex justify-content-around">
            <app-one-using-ngif />
            <app-two-programmatically />
        </div>
    </section>
  
  `,
  styles: [``]
})
export class TenDynamicComponentsComponent {

}
