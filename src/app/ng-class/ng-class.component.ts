import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {
  
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
