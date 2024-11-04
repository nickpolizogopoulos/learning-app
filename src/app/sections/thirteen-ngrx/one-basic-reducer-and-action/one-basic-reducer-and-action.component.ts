import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  decrementAction,
  incrementAction,
  resetAction
} from './one-counter.actions';
import { lessonsHostClasses } from 'src/app/shared/lessons-host-classes';

@Component({
  selector: 'app-one-basic-reducer-and-action',
  template: `
  
    <h4>1. Basic Store Setup using createReducer( ) & createAction( ) <span class="text-secondary h6">- number type</span></h4>
    <p class="lead">According to the ancient scripts, this must be an old counter because it looks like an old counter...</p>
    <hr>
    <label for="oneBasicStore">Increase / Decrease by:</label>
    <input class="form-control rounded-1 shadow-none" type="number" id="oneBasicStore" [(ngModel)]="userInput">
    <a *ngIf="userInput !== 1" (click)="inputReset()" class="cursor-pointer cursor-pointer nodecor addToTestText">[reset]</a>
    <div *ngIf="errorAlert" class="mt-3 alert alert-danger rounded-1 p-2" role="alert">{{errorAlert}}</div>

    <div class="d-flex justify-content-center mt-3">
        <h2>{{ count$ | async }}</h2>
    </div>
    <div class="d-flex justify-content-center mt-2">
        <button (click)="decrement()" class="btn btn-danger rounded-1 me-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16" style="margin-bottom: 2px;">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
          </svg>
        </button>
        <button (click)="counterReset()" class="btn btn-warning rounded-1 me-2">Reset</button>
        <button (click)="increment()" class="btn btn-success rounded-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16" style="margin-bottom: 2px;">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
          </svg>
        </button>
    </div>

  `,
  host: lessonsHostClasses
})
export class OneBasicReducerAndActionComponent {
  
  count$: Observable<number>;
  userInput: number = 1;
  errorAlert: string | null = null;

  constructor(
    private store: Store<{ oneCounter:number }>,
  ) {
    this.count$ = this.store.select('oneCounter')
  }

  //*Quick check to avoid using template/reactive forms 
  private inputCheck(): void {
    this.errorAlert = null;

    if (typeof this.userInput !== 'number') {
      this.errorAlert = 'Only numbers are allowed!';
      return;
    }

    if (this.userInput === 0) {
      this.errorAlert = `The number 0 won't increase / decrease the counter.`;
      return;
    }
  }

  increment(): void {
    this.inputCheck();
    this.store.dispatch( incrementAction( {value:this.userInput} ) );
  }

  decrement(): void {
    this.inputCheck();
    this.store.dispatch( decrementAction( {value:this.userInput} ) );
  }
  
  counterReset(): void {
    this.errorAlert = null;
    this.store.dispatch( resetAction( {value:0} ) );
  }

  inputReset(): void {
    this.errorAlert = null;
    this.userInput = 1;
  }

}
