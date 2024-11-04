import {
  Component,
  OnDestroy
} from '@angular/core';
import {
  Observer,
  Subscription,
  Observable,
  map
} from 'rxjs';

import { lessonsHostClasses } from 'src/app/shared/lessons-host-classes';

@Component({
  selector: 'app-five-map-operator',
  template: `

    <h4>5. The .map( ) Operator</h4>
    <p class="lead">Game: Hide and Seek.</p>
    <button *ngIf="!counting" (click)="onStart()" class="btn btn-sm btn-primary rounded-1 me-2 mb-3">Start!</button>
    <button *ngIf="counting" class="btn btn-sm btn-primary rounded-1 mb-3" type="button" disabled>
      <span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
      <span role="status">Counting...</span>
    </button>
    <button (click)="onReset()" *ngIf="count === 100" class="btn btn-sm btn-secondary rounded-1 mb-3">Reset</button>
    <p *ngIf="count > 0" class="lead">{{ count }}<span *ngIf="count === 100" class="lead">!</span></p>
    <p *ngIf="counting">* hiders gonna hide *</p>
    <p *ngIf="ready" class="lead">Seeker: "Ready or not, here I come!"</p>
  `,
  host: lessonsHostClasses
})
export class FiveMapOperatorComponent implements OnDestroy {

  count: number = 0;
  subscription?: Subscription;
  ready: boolean = false;
  counting: boolean = false;

  onStart(): void {
    this.ready = false;

    //* observable
    const timer = Observable.create( (observer: Observer<number>) => {
      let count = 0;
      setInterval( () => {
        observer.next(count);
        if (count === 20) observer.complete();
        count++;
      } ,400);
    });

    //* Operator
    const addition:number = 5;
    const operator = timer.pipe(
      map( (data: number) => data * addition )
    );

    //* Operator subscription
    this.subscription = operator.subscribe({
      next: (data: number) => {
        this.count = data;
        this.counting = true;
      },
      complete:() => { 
        this.ready = true;
        this.counting = false;
      },
      error: (error: string) => console.log(error),
    });
  }

  onReset(): void {
    this.count = 0;
    this.ready = false;
    this.counting = false;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
