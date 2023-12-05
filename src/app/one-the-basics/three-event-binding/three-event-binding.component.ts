import { Component } from '@angular/core';

@Component({
  selector: 'app-three-event-binding',
  template: `
  
  <h4>3. Passing and Using data with Event Binding</h4>
  <p class="lead">Insert data and see it rendered below.</p>
  <input
    class="form-control rounded-0 shadow-none"
    type="text"
    placeholder="Type here..."
    (input)="onInput($event)"
  >
  <h5 class="pt-4">Your data:</h5>
  <p>data : string = '{{ data }}' ;</p>
  
  `,
  styles: [``]
})
export class ThreeEventBindingComponent {
  
  data = 'hello!';

  onInput( event: Event ) {
    this.data = (<HTMLInputElement>event.target).value;
  }

}
