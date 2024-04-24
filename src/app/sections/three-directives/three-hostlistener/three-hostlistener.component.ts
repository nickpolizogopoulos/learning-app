import { Component } from '@angular/core';

@Component({
  selector: 'app-three-hostlistener',
  templateUrl: './three-hostlistener.component.html',
  // styleUrls: ['./three-hostlistener.component.css']
  styles: [`
  
    .imgRow {
      background-image: url(../../../assets/images/Clouds-by-Bing-Hui-Yau.jpg);
      background-position: top;
    }
    .imgCol {
        height: 100px;
    }
    .greenFilter {
        background-color: rgba(0, 128, 0, 0.2);
    }
    .yellowFilter {
        background-color: rgba(255, 255, 0, 0.2);
    }
  
  `]
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
