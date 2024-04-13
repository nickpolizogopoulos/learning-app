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
    <div class="d-flex justify-content-center">
        <h2>{{ count$ | async }}</h2>
    </div>
    <div class="d-flex justify-content-center mt-2">
        <button (click)="decrement()" class="btn btn-danger rounded-1 me-2">-</button>
        <button (click)="reset()" class="btn btn-warning rounded-1 me-2">Reset</button>
        <button (click)="increment()" class="btn btn-success rounded-1">+</button>
    </div>
  `,
  styles: [``]
})
export class OneBasicReducerAndActionComponent {
  
  count$:Observable<number>;
  increaseDecreaseBy:number = 1;

  constructor(
    private store:Store<{ oneCounter:number }>,
  ) {
    this.count$ = this.store.select('oneCounter')
  }

  increment():void {
    this.store.dispatch(incrementAction( {value: this.increaseDecreaseBy} ))
  }

  decrement():void {
    this.store.dispatch(decrementAction( {value: this.increaseDecreaseBy} ))
  }
  
  reset():void {
    this.store.dispatch(resetAction( {value: 0} ))
  }
}
