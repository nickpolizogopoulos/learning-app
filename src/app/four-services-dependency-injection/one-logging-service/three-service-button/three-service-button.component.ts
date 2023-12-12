import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingServiceService } from '../logging-service.service';

@Component({
  selector: 'app-three-service-button',
  template: `
  
  <button 
    (click)="onGreenButtonClick()" 
    class="btn btn-success rounded-1 me-4 mb-3"
    >
    Green button
  </button>
  
  
  `,
  styles: [``],
  providers: [LoggingServiceService]
})
export class ThreeServiceButtonComponent {

  constructor ( private loggingService:LoggingServiceService ) {

  }
  @Output() greenClick = new EventEmitter<Function>();

  // greenColor:string = 'Green';

  onGreenButtonClick() {
    // this.loggingService.logMessage(this.greenColor);
    this.greenClick.emit(
      () => {}
      )
  }
}
