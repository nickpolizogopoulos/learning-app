import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fourteen-animations',
  template: `
  
    <h2 [@title]><mark>Animations - 2 Lessons.</mark></h2>
    <section class="container-fluid">
      <div class="row mt-4 pt-4 d-flex justify-content-around">
          <app-one-basic-animation [@first] class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-one-basic-animation>
          <app-two-void-state class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-two-void-state>
      </div>
    </section>
  
  `,
  styles: [``],
  animations: [

    trigger(
      'first',
      [
        state('in', style({ transform: 'scale(1)', opacity:1 })),
        transition(
          'void => *',
          [
            style({ transform: 'scale(0)', opacity: 0 }),
            animate(300)
          ]
        )
      ]
    ),

    trigger(
      'title',
      [
        state('in', style({ transform: 'translateY(0)', opacity:1 })),
        transition(
          'void => *',
          [
            style({ transform: 'translateX(500px)', opacity:0 }),
            animate(300)
          ]
        )
      ]
    )

  ]
})
export class FourteenAnimationsComponent {

}
