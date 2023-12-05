import { Component } from '@angular/core';

@Component({
  selector: 'app-eight-ng-class',
  templateUrl: './eight-ng-class.component.html',
  styles: [`

  .ngClassBox {
    padding: 20px 14px;
    background-color: rgb(243, 255, 243);
    border: 3px dashed rgb(36, 54, 99);
  }
  `]
})
export class EightNgClassComponent {

  leftActive = true;
  midActive = false;
  rightActive = false;

  onLeftSelect(){
    this.leftActive = true;
    this.midActive = false;
    this.rightActive = false;
  }
  onMidSelect(){
    this.leftActive = false;
    this.midActive = true;
    this.rightActive = false;
  }
  onRightSelect(){
    this.leftActive = false;
    this.midActive = false;
    this.rightActive = true;
  }
}
