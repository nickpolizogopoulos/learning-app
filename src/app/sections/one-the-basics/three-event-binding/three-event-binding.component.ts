import { Component } from '@angular/core';

import { lessonsHostClasses } from 'src/app/shared/lessons-host-classes';

@Component({
  selector: 'app-three-event-binding',
  template: `
  
    <h4>3. Passing and Using data with Event Binding</h4>
    <p class="lead">Insert data and see it rendered below.</p>
    <input
      class="form-control rounded-1 shadow-none"
      type="text"
      placeholder="Type here..."
      (input)="onInput($event)"
    >
    <h5 class="pt-4">Your data:</h5>
    <p>data : string = '{{ data }}' ;</p>
  
  `,
  host: lessonsHostClasses
})
export class ThreeEventBindingComponent {
  
  data: string = 'hello!';

  onInput( event: Event ): void {
    this.data = (<HTMLInputElement>event.target).value;
  }

}
