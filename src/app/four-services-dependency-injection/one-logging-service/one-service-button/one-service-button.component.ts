import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingServiceService } from '../logging-service.service';

@Component({
  selector: 'app-one-service-button',
  template: `
  
  <button 
    (click)="onBlueButtonClick()" 
    class="btn btn-primary rounded-1 me-4 mb-3"
    >
    Blue button
  </button>

  `,
  styles: [``],
  providers: [LoggingServiceService]
})
export class OneServiceButtonComponent {

  constructor( private LoggingService:LoggingServiceService) {

  }

  blueColor:string = 'Blue';

  onBlueButtonClick():void {
    this.LoggingService.logMessage(this.blueColor);
  }

}
