import { Component } from '@angular/core';

@Component({
  selector: 'app-four-hostbinding',
  templateUrl: './four-hostbinding.component.html',
  styles: [`
  
  .highLighter {
    background-color: #e4f2c7;
  }
  .heartColor {
    color: #ff2164;
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
}
