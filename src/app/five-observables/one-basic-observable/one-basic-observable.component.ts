import { Component, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-one-basic-observable',
  templateUrl: './one-basic-observable.component.html',
  styles: [``]
})
export class OneBasicObservableComponent implements OnDestroy {

  gameMode:number = 200;
  modeLevel:string = 'Easy';
  seconds:number = 0;
  timerIsRunning:boolean = false;
  startPressed:boolean = false;
  timer?:Subscription;
  winningPrize:boolean = false;

  start():void {
    this.timer = interval(this.gameMode)
    .subscribe( count => {
      this.seconds = count;
      this.timerIsRunning = true;
      this.winningPrize = false;
      this.startPressed = true;
      console.log(count);
      
    })
  }

  stop():void {
    this.timer?.unsubscribe()
    this.timerIsRunning = false;
    this.startPressed = false;
  }

  reset():void {
    this.seconds = 0;
    this.winningPrize = false;
  }

  winOnClick():void {
    this.winningPrize = !this.winningPrize;
  }

  onEasyClick():void {
    this.gameMode = 200;
    this.modeLevel = 'Easy';
  }

  onHardClick():void {
    this.gameMode = 100;
    this.modeLevel = 'Hard';
  }

  onNinjaClick() {
    this.gameMode = 50;
    this.modeLevel = 'Ninja';
  }

  onMasterClick():void {
    this.gameMode = 10;
    this.modeLevel = `I AM DOING IT`;
  }

  ngOnDestroy():void {
    //in case they leave without stopping it first.
    this.timer?.unsubscribe()
  }

}
