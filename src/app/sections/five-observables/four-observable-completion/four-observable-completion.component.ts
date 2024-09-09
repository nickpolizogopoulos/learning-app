import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable, timer, Observer } from 'rxjs';
import { lessonHostClasses } from 'src/app/shared/host-classes';

@Component({
  selector: 'app-four-observable-completion',
  template: `
  
    <h4>4. Observable Completion</h4>
    <div class="row">
      <div class="col-7"><p class="lead">You can take a quick power nap for:</p></div>
      <div class="col-4">
        <select class="form-select" [disabled]="timerStarted">
          <option (click)="onReset()" selected>Select</option>
          <option (click)="onFiveSelect()">5 Seconds</option>
          <option (click)="onTenSelect()">10 Seconds</option>
        </select>
      </div>
    </div>
    <button
      (click)="onStart()"
      [ngClass]="{'disabled' : timerStarted}"
      class="btn btn-sm btn-success rounded-1 mb-2"
      [disabled]="seconds === 0">Start the clock</button>
    <p *ngIf="timerStarted" class="lead">Time left: {{ timeLeft }}</p>
    <span *ngIf="timerEnded" (click)="reload()" class="addToTestText cursor-pointer">[ reload ]</span>

  `,
  styles: [``],
  host: lessonHostClasses
})
export class FourObservableCompletionComponent implements OnDestroy {

  seconds:number = 0;
  timerStarted:boolean = false;
  timeLeft:number = 0;
  subscription?:Subscription;
  timerEnded:boolean = false;

  onFiveSelect():void {
    this.seconds = 5;
  }

  onTenSelect():void {
    this.seconds = 10;
  }

  onStart():void {
    this.timerStarted = true;

    const observable = Observable.create(
      (observer:Observer<number>) => {
        let count = 0;
        setInterval( () => {
          observer.next(count);
          if (this.timeLeft === 0) {
            observer.complete();
            this.timerEnded = true;
          }
          count++;
        }, 1000);
      }
    );

    this.subscription = observable.subscribe({
      next: (data:number) => this.timeLeft = this.seconds - data,
      complete:() => alert('Wake up!'),
      error: (error:string) => console.log(error)
    })
  }

  onReset():void {
    this.seconds = 0;
    this.timerStarted = false;
  }

  reload():void {
    window.location.reload();
  }

  ngOnDestroy():void {
    this.subscription?.unsubscribe();
  }

}
