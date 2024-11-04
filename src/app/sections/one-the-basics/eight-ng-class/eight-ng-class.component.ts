import { Component } from '@angular/core';

import { lessonsHostClasses } from 'src/app/shared/lessons-host-classes';

@Component({
  selector: 'app-eight-ng-class',
  templateUrl: './eight-ng-class.component.html',
  styles: `

    .ngClassBox {
      padding: 20px 14px;
      background-color: rgb(243, 255, 243);
      border: 3px dashed rgb(36, 54, 99);
    }

  `,
  host: lessonsHostClasses
})
export class EightNgClassComponent {

  leftActive: boolean = true;
  midActive: boolean = false;
  rightActive: boolean = false;

  onLeftSelect(): void {
    this.leftActive = true;
    this.midActive = false;
    this.rightActive = false;
  }

  onMidSelect(): void {
    this.leftActive = false;
    this.midActive = true;
    this.rightActive = false;
  }

  onRightSelect(): void {
    this.leftActive = false;
    this.midActive = false;
    this.rightActive = true;
  }
  
}
