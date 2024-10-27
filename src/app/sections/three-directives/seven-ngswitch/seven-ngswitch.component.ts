import { Component } from '@angular/core';

import { lessonsHostClasses } from 'src/app/shared/lessons-host-classes';

@Component({
  selector: 'app-seven-ngswitch',
  templateUrl: './seven-ngswitch.component.html',
  host: lessonsHostClasses
})
export class SevenNgswitchComponent {

  value?: number;

  onPlaneSelect(): void {
    this.value = 1;
  }

  onTrainSelect(): void {
    this.value = 2;
  }

  onCarSelect(): void {
    this.value = 3;
  }

}
