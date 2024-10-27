import { Component } from '@angular/core';

import { lessonsHostClasses } from 'src/app/shared/lessons-host-classes';

@Component({
  selector: 'app-four-hostbinding',
  templateUrl: './four-hostbinding.component.html',
  styles: [`
  
    .heartColor {
      color: #ff2164;
    }

    .hint {
      font-size: 10px;
      color: #bababa;
      cursor: pointer;
      margin-left: 7px;
    }

    img {
      height: 50px;
      width: auto;
    }
  
  `],
  host: lessonsHostClasses
})
export class FourHostbindingComponent {

  btnDisabled: boolean = true;
  buttonClicked: boolean = false;
  smileOne: boolean = false;
  smileThree: boolean = false;
  heartVisible: boolean = false;
  hint: boolean = false;
  
  onWayClick(): void {
    this.btnDisabled = false;
    this.hint = false;
  }

  onClick(): void {
    this.buttonClicked = true;
    this.heartVisible = true;
  }

  onHeartClick(): void {
    this.heartVisible = false;
    this.smileOne = true;
  }

  onSmileOneClick(): void {
    this.smileOne = false;
    this.smileThree = true;
  }

  onReset(): void {
    this.smileThree = false;
    this.buttonClicked = false;
    this.btnDisabled = true;
  }

  onHintClick(): void {
    this.hint = !this.hint;
  }

}
