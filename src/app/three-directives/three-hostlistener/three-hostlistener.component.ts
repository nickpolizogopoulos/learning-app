import { Component } from '@angular/core';

@Component({
  selector: 'app-three-hostlistener',
  templateUrl: './three-hostlistener.component.html',
  styleUrls: ['./three-hostlistener.component.css']
})
export class ThreeHostlistenerComponent {

  greenFilter?:boolean;
  yellowFilter?:boolean;

  onGreenSelect() {
    this.greenFilter = true;
    this.yellowFilter = false;
  }
  onYellowSelect() {
    this.greenFilter = false;
    this.yellowFilter = true;
  }
  onReset() {
    this.greenFilter = false;
    this.yellowFilter = false;
  }
}
