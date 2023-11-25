import { Component } from '@angular/core';

@Component({
  selector: 'app-eight-ng-class',
  templateUrl: './eight-ng-class.component.html',
  styleUrls: ['./eight-ng-class.component.css']
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
