import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Observer, Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-six-filter-operator',
  template: `
  
    <h4>6. The .filter( ) Operator</h4>
    <p class="lead">Set a range of numbers and generate all the FizzBuzz numbers in that range.
        <a class="addToTestText  nodecor" href="https://en.wikipedia.org/wiki/Fizz_buzz" target="_blank">[ FizzBuzz info ]</a>
    </p>
    <span class="lead">Range: {{ pick.value }}</span>
    <input type="range" class="form-range" 
      #pick (input)="pick.value" id="chosenNumber" 
      min="0" max="1000" 
      [(ngModel)]="userInput" 
      [disabled]="gameIsRunning">
    <button (click)="onStart()" class="btn btn-sm btn-primary me-3 mb-3" [disabled]="userInput === undefined || gameIsRunning">Start</button>
    <!-- <button (click)="onStop()" class="btn btn-sm btn-danger me-3 mb-3" [disabled]="userInput === undefined || !gameIsRunning">Stop</button> -->
    <button *ngIf="!gameIsRunning" (click)="onReset()" class="btn btn-sm btn-secondary me-3 mb-3">Reset</button>
    <p *ngIf="fizBuzzNumbers.length !== 0" class="lead">results:number[ ] = [ {{fizBuzzNumbers.join(', ')}} ];</p>
  
  `,
  styles: [``]
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

  // onStop():void {
  //   this.gameIsRunning = !this.gameIsRunning;
  //   this.subscription?.unsubscribe();
  // }

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
