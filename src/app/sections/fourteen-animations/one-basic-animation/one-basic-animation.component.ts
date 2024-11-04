import { Component } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

import { lessonsHostClasses } from 'src/app/shared/lessons-host-classes';

@Component({
  selector: 'app-one-basic-animation',
  template: `
  
    <h4>1. Basic Animation</h4>
    <p class="lead">Click the coloured line below.
      <a 
        (click)="onHintClick()"
        class="ms-2 addToTestText nodecor"
        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
        target="_blank">[ hint ]
      </a>
    </p>
    <div
      (mouseenter)="onAnimate()"
      (click)="onLineClick()"
      [@animationLine]="state"
      class="animation-line mt-4 mb-4">
    </div>
    <h1 *ngIf="clicked">nice</h1>
    <a
      (click)="onRealHintClick()"
      *ngIf="realHint"
      class="addToTestText nodecor"
      href="https://i.pinimg.com/originals/89/5c/e7/895ce751ba0379700381d17a67086931.gif"
      target="_blank">[ real hint ]
    </a>

  `,
  styles: `

    .animation-line {
        cursor: pointer;
        width: 10px;
        height: 130px;
        border-radius: 10px;
    }
    
  `,
  animations: [
    trigger(
      'animationLine',
      [
        state(
          'left',
          style({
            'background-color':'orangered',
            transform: 'translateX(0)'
          })
        ),

        //* this hides the line in smaller screens. I'll fix later.
        state(
          'right',
          style({        
            backgroundColor:'#586D51',
            transform: 'translateX(450px)',
          })
        ),
        transition(
          'left => right',
          animate(170)
        ),
        transition(
          'right => left',
          animate(170)
        )
      ]
    )
  ],
  host: lessonsHostClasses
})
export class OneBasicAnimationComponent {

  state: string = 'left';
  clicked: boolean = false;
  realHint: boolean = false;

  onAnimate(): void {
    this.state === 'left' ? this.state = 'right' : this.state = 'left'
  }

  onHintClick(): void {
    this.realHint = true;
  }

  onRealHintClick(): void {
    this.realHint = false;
  }

  onLineClick(): void {
    this.clicked = true;
    setTimeout(() =>
      this.clicked = false,
      500
    );
  }

}
