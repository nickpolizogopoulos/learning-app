import { Component } from '@angular/core';

@Component({
  selector: 'app-five-ng-if-else',
  template: `
  
    <h4>5. The *ngIf with an Else Condition</h4>
    <p class="lead">You haven't drink enough water today.</p>
    <button (click)="onClick()" class="btn rounded-1 btn-success">{{ statement ? 'I did!' : 'Did I?'}}</button>
    <h5 class="pt-4">Hydration level:</h5>
    <div *ngIf="!statement; else elseCase">
      <p>Not enough</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-exclamation-octagon" viewBox="0 0 16 16">
        <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1z"/>
        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
      </svg>
    </div>
    <ng-template #elseCase>
      <p>Good Job!&ensp;4.5 / 5</p>
      <ng-container *ngFor="let _ of [].constructor(4)">
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" style="margin-right: 2px;"  class="bi bi-star-fill" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
      </ng-container>
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
        <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
      </svg>
      <div class="pt-3">
        <img class="emojiImg" src="../../assets/images/slightly-smiling-face_1f642.png" alt="Slightly Smiling Face from Messenger 1.0">
      </div>
    </ng-template>
  
  `,
  styles: [`
  
  .emojiImg {
    height: 45px;
    width: 45px;
  }
  `]
})
export class FiveNgIfElseComponent {
  
  statement:boolean = false;

  onClick():void {
    this.statement = !this.statement;
  }



}
