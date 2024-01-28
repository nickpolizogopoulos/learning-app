import { Component } from '@angular/core';

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
  
  `]
})
export class FourHostbindingComponent {

  btnDisabled:boolean = true;
  buttonClicked:boolean = false;
  smileOne:boolean = false;
  smileThree:boolean = false;
  heartVisible:boolean = false;
  hint:boolean = false;
  
  onEnable() {
    this.btnDisabled = false;
  }
  onClick() {
    this.buttonClicked = true;
    this.heartVisible = true;
  }
  onHeartClick() {
    this.heartVisible = false;
    this.smileOne = true;
  }
  onSmileOneClick() {
    this.smileOne = false;
    this.smileThree = true;
  }
  onReset() {
    this.smileThree = false;
    this.buttonClicked = false;
    this.btnDisabled = true;
  }
  onTipClick() {
    this.hint = !this.hint;
  }
}
