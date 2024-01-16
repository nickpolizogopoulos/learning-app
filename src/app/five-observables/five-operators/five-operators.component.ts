import { Component, OnDestroy } from '@angular/core';
import { Observer, Subscription } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-five-operators',
  templateUrl: './five-operators.component.html',
  styleUrls: ['./five-operators.component.css']
})
export class FiveOperatorsComponent implements OnDestroy {

  count:number = 0;
  subscription?:Subscription;

  start():void {
    const timer = Observable.create( (observer:Observer<number>) => {
      let count = 0;
      setInterval( () => {
        observer.next(count);
        // if (count === 20) 
        count++;
      } ,50);
    })


    this.subscription = timer.subscribe(
      (data:number) => this.count = data,
      (error:string) => console.log(error),
      () => {}
    );
  }

  stop():void {
    this.subscription?.unsubscribe()
  }
  
  ngOnDestroy():void {
    this.subscription?.unsubscribe()
  }
}
