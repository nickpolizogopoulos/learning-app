import {
  Component,
  OnDestroy
} from '@angular/core';
import {
  Subscription,
  interval
} from 'rxjs';

import { lessonHostClasses } from 'src/app/shared/host-classes';

@Component({
  selector: 'app-one-basic-observable',
  templateUrl: './one-basic-observable.component.html',
  host: lessonHostClasses
})
export class OneBasicObservableComponent implements OnDestroy {

  gameModeSpeed: number = 200;
  modeLevel: string = 'Easy';
  runner: number = 0;
  gameIsRunning: boolean = false;
  startPressed: boolean = false;
  timer?: Subscription;
  winningPrize: boolean = false;

  start(): void {
    this.timer = interval(this.gameModeSpeed).subscribe({ 
      next: count => {
        this.runner = count;
        this.gameIsRunning = true;
        this.winningPrize = false;
        this.startPressed = true;
      }
    });
  }

  stop(): void {
    this.timer?.unsubscribe();
    this.gameIsRunning = false;
    this.startPressed = false;
  }

  reset(): void {
    this.runner = 0;
    this.winningPrize = false;
    this.timer?.unsubscribe();
  }

  winOnClick(): void {
    this.winningPrize = !this.winningPrize;
  }

  onEasyClick(): void {
    this.reset();
    this.gameModeSpeed = 200;
    this.modeLevel = 'Easy';
  }

  onHardClick(): void {
    this.reset();
    this.gameModeSpeed = 100;
    this.modeLevel = 'Hard';
  }

  onNinjaClick(): void {
    this.reset();
    this.gameModeSpeed = 50;
    this.modeLevel = 'Ninja';
  }

  onMasterClick(): void {
    this.reset();
    this.gameModeSpeed = 10;
    this.modeLevel = `I AM DOING IT`;
  }

  ngOnDestroy(): void {
    this.timer?.unsubscribe();
  }

}
