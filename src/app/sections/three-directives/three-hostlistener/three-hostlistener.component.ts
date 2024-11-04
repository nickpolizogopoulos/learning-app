import { Component } from '@angular/core';

import { lessonsHostClasses } from 'src/app/shared/lessons-host-classes';

@Component({
  selector: 'app-three-hostlistener',
  templateUrl: './three-hostlistener.component.html',
  styles: `
  
    .imgRow {
      background-image: url(../../../../assets/images/Clouds-by-Bing-Hui-Yau.jpg);
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
  
  `,
  host: lessonsHostClasses
})
export class ThreeHostlistenerComponent {

  greenFilter?: boolean;
  yellowFilter?: boolean;

  onGreenSelect(): void {
    this.greenFilter = true;
    this.yellowFilter = false;
  }

  onYellowSelect(): void {
    this.greenFilter = false;
    this.yellowFilter = true;
  }

  onReset(): void {
    this.greenFilter = false;
    this.yellowFilter = false;
  }

}
