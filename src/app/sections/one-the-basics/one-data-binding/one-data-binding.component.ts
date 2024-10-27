import { Component } from '@angular/core';

import { lessonsHostClasses } from 'src/app/shared/lessons-host-classes';

@Component({
  selector: 'app-one-data-binding',
  template: `
  
    <h4>1. Two - way Data Binding with ngModel</h4>
    <p class="lead">Insert data and see it rendered below.</p>
    <input
      class="form-control rounded-1 shadow-none"
      type="text"
      placeholder="Type here..."
      [(ngModel)]="data">
    <h5 class="pt-4">Your data:</h5>
    <p>data : string = '{{ data }}' ;</p>

`,
  host: lessonsHostClasses
})
export class OneDataBindingComponent {

  data: string = 'hello!';

}
