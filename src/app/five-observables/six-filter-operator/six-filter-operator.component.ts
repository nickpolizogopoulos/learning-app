import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-six-filter-operator',
  templateUrl: './six-filter-operator.component.html',
  styleUrls: ['./six-filter-operator.component.css']
})
export class SixFilterOperatorComponent implements OnDestroy, OnInit {

  userInput?:number;
  fizBuzzNumbers:number[] = [];
  subscription?:Subscription;
  gameIsRunning:boolean = false;

  ngOnInit():void {
    this.gameIsRunning = false;
    this.fizBuzzNumbers.length = 0;
    this.userInput = undefined;
  }

  onStart():void {
    this.gameIsRunning = true;
    this.fizBuzzNumbers.length = 0;

    const customObservable = Observable.create(
      (observer:Observer<number>) => {
        let count = 0;
        setInterval( () => {  
          observer.next(count);
          if (count === this.userInput) {
            observer.complete()
            this.gameIsRunning = false;
          }
          count++;
        }, 5);
      }
    )

    const operator = customObservable.pipe(
      filter( (data:number) => {
        return data > 0 && (data % 3 === 0 && data % 5 === 0)
      } )
    )

    this.subscription = operator.subscribe(
      (data:number) => {
        this.fizBuzzNumbers.push(data);
      },
    )
  }

  onStop():void {
    this.gameIsRunning = !this.gameIsRunning;
    this.subscription?.unsubscribe();
  }

  onReset():void {
    this.subscription?.unsubscribe();
    this.gameIsRunning = false;
    this.fizBuzzNumbers.length = 0;
    this.userInput = undefined;
  }

  ngOnDestroy():void {
    this.subscription?.unsubscribe();
  }
  
}
