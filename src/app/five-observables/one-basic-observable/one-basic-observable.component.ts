import { Component } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-one-basic-observable',
  templateUrl: './one-basic-observable.component.html',
  styles: [``]
})
export class OneBasicObservableComponent {

  gameMode:number = 200;
  modeLevel:string = 'Easy';
  seconds:number = 0;
  timerIsRunning:boolean = false;
  startPressed:boolean = false;
  timer?:Subscription;
  winningPrize:boolean = false;

  start() {
    this.timer = interval(this.gameMode).subscribe( count => {
      this.timerIsRunning = true;
      this.seconds = count;
      this.winningPrize = false;
      this.startPressed = true;
    })
  }

  stop() {
    this.timer?.unsubscribe()
    this.timerIsRunning = false;
    this.startPressed = false;
  }

  reset() {
    this.seconds = 0;
    this.winningPrize = false;
  }

  winOnClick() {
    this.winningPrize = !this.winningPrize;
  }

  onEasyClick() {
    this.gameMode = 200;
    this.modeLevel = 'Easy';
  }

  onHardClick() {
    this.gameMode = 100;
    this.modeLevel = 'Hard';
  }

  onNinjaClick() {
    this.gameMode = 50;
    this.modeLevel = 'Ninja';
  }

  onMasterClick() {
    this.gameMode = 10;
    this.modeLevel = `I AM DOING IT`;
  }

}
