import { Component, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';

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

    const kmObservable = Observable.create(
      (observer:Observer<number>) => {
      let count:number = 0;
      setInterval( () => {
        observer.next(count);
        count++
      }, 123)
    });

    const secObservable = Observable.create(
      (observer:Observer<number>) => {
      let count:number = 0;
      setInterval( () => {
        observer.next(count);
        count++
      }, 1000)
    });

    this.kmSubscription = kmObservable.subscribe(
      (data:number) => this.kilometers = data
    );

    this.secSubscription = secObservable.subscribe(
      (data:number) => this.seconds = data
    );
  }

  onStop():void {
    this.counterPlaying = false;
    this.kmSubscription?.unsubscribe();
    this.secSubscription?.unsubscribe();
  }

  onReset():void {
    this.kilometers = 0;
    this.seconds = 0;
  }

  ngOnDestroy():void {
    this.kmSubscription?.unsubscribe();
    this.secSubscription?.unsubscribe();
  }
}
   