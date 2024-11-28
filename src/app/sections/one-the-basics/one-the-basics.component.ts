import { Component } from '@angular/core';

@Component({
  selector: 'app-one-the-basics',
  template: `
  
    <h2>The Basics - 8 Lessons.</h2>
    <section class="container-fluid">
      <div class="row mt-4 pt-4 d-flex justify-content-around">
        <app-one-data-binding />
        <app-two-property-binding />
        <app-three-event-binding />
        <app-four-ng-if />
        <app-five-ng-if-else />
        <app-six-ng-for />
        <app-seven-ng-style />
        <app-eight-ng-class />
        <app-nine-thank-you />
      </div>
    </section>
  
  `
})
export class OneTheBasicsComponent {}