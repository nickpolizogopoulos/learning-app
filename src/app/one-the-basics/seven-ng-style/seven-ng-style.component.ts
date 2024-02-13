import { Component } from '@angular/core';

@Component({
  selector: 'app-seven-ng-style',
  // templateUrl: './seven-ng-style.component.html',
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
      <div *ngIf="spinnerOn" class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <a
        [ngStyle]="{ backgroundColor: getResult() }"
        *ngIf="showResult"
        (click)="reset()"
        class="ngStyleResult nodecor inherit rounded-1 lead p-2 ps-5 pe-5"
        >{{ result }}
      </a>
    </div>
  
  `,
  styles: [``]
})
export class SevenNgStyleComponent {

  showResult = false;
  spinnerOn = false;
  result = 'Tails';

  onFlip():void {
    this.spinnerOn = true;
    setTimeout(() => {
      this.spinnerOn = false;
    }, 700);
    
    this.result = Math.random() > 0.5 ? 'Tails' : 'Heads';

    this.showResult = false;
    setTimeout(() => {
      this.showResult = true;
    }, 700);
  }

  getResult():string {
    return this.result === 'Tails' ? '#add5ff' : '#ffadad';
  }
  
  reset():void {
    this.showResult = false;
    this.spinnerOn = false;
  }
}
