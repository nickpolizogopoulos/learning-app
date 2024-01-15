import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval, timer } from 'rxjs';

@Component({
  selector: 'app-two-custom-observable',
  templateUrl: './two-custom-observable.component.html',
  styles: [``]
})
export class TwoCustomObservableComponent implements OnDestroy {

  kilometers:number = 0;
  seconds:number = 0;
  counterPlaying:boolean = false;
  kmSubscription?:Subscription;
  secSubscription?:Subscription;

  onStart():void {
    this.counterPlaying = true;
    const kmObservable = Observable.create( (observer:any) => {
      let count:number = 0;
      setInterval( () => {
        observer.next(count);
        count++
      }, 123)
    })

    this.kmSubscription = kmObservable.subscribe(
      (data:number) => this.kilometers = data
    )

    const timer = interval(1000)
    this.secSubscription = timer.subscribe(
      count => this.seconds = count
   )
  }

  onStop():void {
    this.counterPlaying = false;
    this.kmSubscription?.unsubscribe()
    this.secSubscription?.unsubscribe()
  }

  onReset():void {
    this.kilometers = 0;
    this.seconds = 0;
  }

  ngOnDestroy():void {
    this.kmSubscription?.unsubscribe()
    this.secSubscription?.unsubscribe()
  }
}
   