import { Component } from '@angular/core';

@Component({
  selector: 'app-seven-ngswitch',
  templateUrl: './seven-ngswitch.component.html',
  styles: [``]
})
export class SevenNgswitchComponent {

  value?:number;

  onPlaneSelect():void {
    this.value = 1;
  }
  onTrainSelect():void {
    this.value = 2;
  }
  onCarSelect():void {
    this.value = 3;
  }

}
