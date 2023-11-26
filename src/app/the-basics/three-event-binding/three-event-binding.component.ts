import { Component } from '@angular/core';

@Component({
  selector: 'app-three-event-binding',
  templateUrl: './three-event-binding.component.html',
  styleUrls: ['./three-event-binding.component.css']
})
export class ThreeEventBindingComponent {
  
  data = 'hello!';

  onInput( event: Event ) {
    this.data = (<HTMLInputElement>event.target).value;
  }

}
