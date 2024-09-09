import { Component } from '@angular/core';
import { lessonHostClasses } from 'src/app/shared/host-classes';

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
  styles: [``],
  host: lessonHostClasses
})
export class ThreeEventBindingComponent {
  
  data = 'hello!';

  onInput( event: Event ) {
    this.data = (<HTMLInputElement>event.target).value;
  }

}
