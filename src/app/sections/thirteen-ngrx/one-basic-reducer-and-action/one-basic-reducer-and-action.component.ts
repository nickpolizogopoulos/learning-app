import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrementAction, incrementAction, resetAction } from './one-counter.actions';

@Component({
  selector: 'app-one-basic-reducer-and-action',
  template: `
  
    <h4>1. Basic Store Setup</h4>
    <p class="lead">Reducer and Action with <span class="menlo">createReducer()</span> and <span class="menlo">createAction()</span> methods.</p>
    <hr>
    <label for="oneBasicStore">Increase / Decrease by:</label>
    <input class="form-control rounded-1 shadow-none mb-3" type="number" id="oneBasicStore" [(ngModel)]="increaseDecreaseBy">

    <div *ngIf="alert" class="alert alert-danger rounded-1 p-2" role="alert">
      {{alert}}
    </div>

    <div class="d-flex justify-content-center">
        <h2>{{ count$ | async }}</h2>
    </div>
    <div class="d-flex justify-content-center mt-2">
        <button (click)="decrement()" class="btn btn-danger rounded-1 me-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16" style="margin-bottom: 2px;">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8"/>
          </svg>
        </button>
        <button (click)="reset()" class="btn btn-warning rounded-1 me-2">Reset</button>
        <button (click)="increment()" class="btn btn-success rounded-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16" style="margin-bottom: 2px;">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
          </svg>
        </button>
    </div>
  `,
  styles: [``]
})
export class OneBasicReducerAndActionComponent {
  
  count$:Observable<number>;
  increaseDecreaseBy:number = 1;
  alert:string | null = '';

  constructor(
    private store:Store<{ oneCounter:number }>,
  ) {
    this.count$ = this.store.select('oneCounter')
  }

  private inputCheck():void {
    this.alert = null;
    if (typeof this.increaseDecreaseBy !== 'number') {
      this.alert = 'Only numbers are allowed!';
      return;
    }
    if (this.increaseDecreaseBy === 0) {
      this.alert = `The number 0 won't increase / decrease the counter.`;
      return;
    }
  }

  increment():void {
    this.inputCheck();
    this.store.dispatch( incrementAction({value: this.increaseDecreaseBy}) );
  }

  decrement():void {
    this.inputCheck();
    this.store.dispatch( decrementAction({value: this.increaseDecreaseBy}) );
  }
  
  reset():void {
    this.increaseDecreaseBy = 1;
    this.alert = null;
    this.store.dispatch( resetAction({value: 0}) );
  }

}
