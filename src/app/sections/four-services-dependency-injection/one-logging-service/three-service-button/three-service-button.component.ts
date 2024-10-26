import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';

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
  providers: [LoggingServiceService]
})
export class ThreeServiceButtonComponent {

  @Output() greenClick = new EventEmitter<void>();

  onGreenButtonClick() {
    this.greenClick.emit();
  }
  
}
