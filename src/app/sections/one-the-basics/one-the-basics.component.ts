import { Component } from '@angular/core';

@Component({
  selector: 'app-one-the-basics',
  // templateUrl: './one-the-basics.component.html',
  template: `
  
    <h2><mark>The Basics - 8 Lessons.</mark></h2>
    <section class="container-fluid">
        <div class="row mt-4 pt-4 d-flex justify-content-around">
            <app-one-data-binding class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-one-data-binding>
            <app-two-property-binding class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-two-property-binding>
            <app-three-event-binding class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-three-event-binding>
            <app-four-ng-if class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-four-ng-if>
            <app-five-ng-if-else class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-five-ng-if-else>
            <app-six-ng-for class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-six-ng-for>
            <app-seven-ng-style class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-seven-ng-style>
            <app-eight-ng-class class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-eight-ng-class>
            <app-nine-thank-you class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-nine-thank-you>
        </div>
    </section>
  
  `,
  styles: [``]
})
export class OneTheBasicsComponent {
  
}
