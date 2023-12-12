import { Component } from '@angular/core';
import { LoggingServiceService } from '../logging-service.service';

@Component({
  selector: 'app-two-service-button',
  template: `
  
  <button 
    (click)="onRedButtonClick()" 
    class="btn btn-danger rounded-1 me-4 mb-3"
    >
    Red button
  </button>
  
  `,
  styles: [``],
  providers: [LoggingServiceService]
})
export class TwoServiceButtonComponent {

  constructor( private LoggingService:LoggingServiceService) {
    
  }

  redColor:string = 'Red';

  onRedButtonClick() {
    this.LoggingService.logMessage(this.redColor)
  }
}


