import { 
  Component,
  EventEmitter,
  Output
} from '@angular/core';

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
  providers: [LoggingServiceService]
})
export class TwoServiceButtonComponent {

  @Output() redClick = new EventEmitter<void>();

  onRedButtonClick() {
    this.redClick.emit();
  }

}
