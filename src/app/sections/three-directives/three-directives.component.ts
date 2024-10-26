import { Component } from '@angular/core';

@Component({
  selector: 'app-three-directives',
  template: `
  
    <h2>Directives Deep Dive - 7 Lessons.</h2>
    <section class="container-fluid">
        <div class="row mt-4 pt-4 d-flex justify-content-around">
            <app-one-basic-custom-directive />
            <app-two-renderer-directive />
            <app-three-hostlistener />
            <app-four-hostbinding />
            <app-five-binding-to-directive-properties />
            <app-six-custom-structural-directive />
            <app-seven-ngswitch />
        </div>
    </section>
  
  `
})
export class ThreeDirectivesComponent {}