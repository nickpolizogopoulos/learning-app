import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

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
  providers: [LoggingServiceService]
})
export class OneServiceButtonComponent {

  @Output() blueClick = new EventEmitter<void>();

  onBlueButtonClick():void {
    this.blueClick.emit();
  }

}
