import {
  Component,
  OnInit
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import {
  Counter, 
  decrement, 
  increment, 
  init, 
  reset, 
  selectCount, 
  selectDoubleCount 
} from './store-all-in-one';
import { lessonsHostClasses } from 'src/app/shared/lessons-host-classes';

@Component({
  selector: 'app-four-effect',
  template: `
  
    <h4>4. Using Effects</h4>
    <p class="lead">
      According to the ancient scripts, this must be a counter from the future.
      It somehow <u class="text-primary">remembers</u> the data if the user reloads the window...
    </p> 
    <div class="d-flex justify-content-center mt-3">
      <h3>Single: {{ count$ | async }}</h3>
    </div>
    <div class="d-flex justify-content-center">
      <h3>Double: {{ doubleCount$ | async }}</h3>
    </div>
    <div class="d-flex justify-content-center mt-2">
      <button (click)="decrement()" class="btn btn-warning rounded-0 me-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-patch-minus" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/>
          <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"/>
        </svg>
      </button>
      <button (click)="reset()" class="btn btn-secondary rounded-0 me-2">Reset</button>
      <button (click)="increment()" class="btn btn-primary rounded-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-patch-plus" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5"/>
          <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911z"/>
        </svg>
      </button>
    </div>
  
  `,
  styles: `
    
    .bi {
      margin-bottom: 2px;
    }
    
  `,
  host: lessonsHostClasses
})
export class FourEffectComponent implements OnInit {

  constructor(
    private store: Store<Counter>
  ) {
    this.count$ = this.store.select( selectCount );
    this.doubleCount$ = this.store.select( selectDoubleCount );
  }

  ngOnInit(): void {
    this.store.dispatch( init() );
  }
  
  count$!:Observable<number>;
  doubleCount$!:Observable<number>;

  increment(): void {
    this.store.dispatch( increment( {value:1} ) );
  }

  decrement(): void {
    this.store.dispatch( decrement( {value:1} ) );
  }

  reset(): void {
    this.store.dispatch( reset( {value:0} ) );
  }
  
}
