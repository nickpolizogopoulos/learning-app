import { Component } from '@angular/core';

@Component({
  selector: 'app-one-logging-service',
  template: `
  
  
  <h4>1. Creating a Logging Service</h4>
<p class="lead mb-2">Every button is a different component and triggers a
     message in the developer tools console via a service.
</p>

<hr class="mb-5">

<app-one-service-button></app-one-service-button>
<app-two-service-button></app-two-service-button>
<app-three-service-button></app-three-service-button>
  

  `,
  styles: [``]
})
export class OneLoggingServiceComponent {

}
