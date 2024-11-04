import { Component } from '@angular/core';

import { lessonsHostClasses } from 'src/app/shared/lessons-host-classes';

@Component({
  selector: 'app-seven-ng-style',
  template: `
  
    <h4>7. The [ngStyle] Directive</h4>
    <p class="lead">Heads or Tails? </p>
    <button (click)="onFlip()" class="btn btn-warning rounded-1"> Flip!
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up mb-1" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
      </svg>
    </button>
    <h5 class="mt-3">Result:</h5>
    <div class="mt-4">

      <span *ngIf="spinnerOn" class="coin-spinner"></span>

      <span
        [ngStyle]="{ backgroundColor: getResult() }"
        *ngIf="showResult"
        (click)="reset()"
        class="cursor-pointer inherit rounded-1 lead p-2 mt-5 ps-3 pe-3"
        >{{ result }}
      </span>
    </div>
  
  `,
  styles: `
  
    .coin-spinner {
      transform: translateZ(1px);
      
      &:after {
        content: '$';
        display: inline-block;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        text-align: center;
        line-height:40px;
        font-size: 32px;
        font-weight: bold;
        background: #FFD700;
        color: #DAA520;
        border: 4px double ;
        box-sizing: border-box;
        box-shadow:  2px 2px 2px 1px rgba(0, 0, 0, .1);
        animation: coin-flip 4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
      }
    }

    @keyframes coin-flip {
      0%, 100% {
        animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
      }
      0% {
        transform: rotateY(0deg);
      }
      50% {
        transform: rotateY(1800deg);
        animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
      }
      100% {
        transform: rotateY(3600deg);
      }
    }
    
  `,
  host: lessonsHostClasses
})
export class SevenNgStyleComponent {

  showResult: boolean = false;
  spinnerOn: boolean = false;
  result: string = 'Tails';

  onFlip(): void {
    this.spinnerOn = true;
    setTimeout(() =>
      this.spinnerOn = false,
      1100
    );
    
    this.result = Math.random() > 0.5 ? 'Tails' : 'Heads';

    this.showResult = false;
    setTimeout(() =>
      this.showResult = true,
      1100
    );
  }

  getResult(): string {
    return this.result === 'Tails' ? '#add5ff' : '#ffadad';
  }
  
  reset(): void {
    this.showResult = false;
    this.spinnerOn = false;
  }

}
