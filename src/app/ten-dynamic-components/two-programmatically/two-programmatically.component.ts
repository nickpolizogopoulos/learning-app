import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable, Observer, Subscription } from 'rxjs';


@Component({
  selector: 'app-two-programmatically',
  templateUrl: './two-programmatically.component.html',
  styles: [``]
})
export class TwoProgrammaticallyComponent {

  knifePulledOut:boolean = false;
  formHidden:boolean = false;
  starPlaying?:boolean;
  counter:number = 0;
  subscription?:Subscription;
  @ViewChild('form') form?:NgForm;
  runAwayWindow:boolean = false;
  lastWindow:boolean = false;
  emptyStars:boolean = false;
  runningAway:boolean = false;
  thiefName:string = '';
  // thiefInfo:{name:string, } = ''

  pullKnife() {
    this.knifePulledOut = true;
  }

  onSubmit() {
    this.thiefName = this.form?.value.name;
    this.form?.reset();
    this.police();
    this.formHidden = true;
    setTimeout(() => {
      this.runAwayWindow = true;
    }, 1000);
  }
  
  onRunAway() {
    this.starPlaying = false;
    this.runAwayWindow = false;
    this.runningAway = true;
    this.emptyStars = true;
    this.subscription?.unsubscribe();
    setTimeout(
      () => {
        this.runningAway = false;
        this.lastWindow = true;
        this.emptyStars = false;
      }, 2000
    );
  }

  police():void {
    this.starPlaying = true;
    const observable = Observable.create(
      (observer:Observer<number>) => {
        let count = 0;
        setInterval( () => {
          observer.next(count);
          count++;
        }, 150);
      }
    )

    this.subscription = observable
      .subscribe(
        (data:number) => this.counter = data
      );
  }

  onCloseLastWindow() {
    this.lastWindow = false;
    this.knifePulledOut = false;
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

}

