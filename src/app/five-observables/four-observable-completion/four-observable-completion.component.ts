import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable, timer } from 'rxjs';

@Component({
  selector: 'app-four-observable-completion',
  templateUrl: './four-observable-completion.component.html',
  styles: [`
    .reloadBtn {
      font-size: 14px;
      color: rgb(161, 161, 161);
      cursor: pointer;
    }
  `]
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
      (observer:any) => {
        let count = 0;
        setInterval( () => {
          observer.next(count);
          if (this.timeLeft === 0) {
            observer.complete()
            this.timerEnded = true;
          }
          count++;
        }, 1000);
      }
    );

    this.subscription = observable.subscribe(
      (data:number) => this.timeLeft = this.seconds - data,
      (error:string) => console.log(error),
      () => alert('Wake up!')
    )
  }

  onReset():void {
    this.seconds = 0;
    this.timerStarted = false;
  }

  ngOnDestroy():void {
    this.subscription?.unsubscribe()
  }

  reload():void {
    window.location.reload();
  }
}
