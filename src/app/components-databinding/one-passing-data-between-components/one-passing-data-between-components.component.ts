import { Component, Input, Output, ViewChild } from '@angular/core';


// *************************PARENT COMPONENT


@Component({
  selector: 'app-one-passing-data-between-components',
  templateUrl: './one-passing-data-between-components.component.html',
  styleUrls: ['./one-passing-data-between-components.component.css']
})
export class OnePassingDataBetweenComponentsComponent {

  @Input() shoppingList = [
    { name: 'Test item', quantity: 5 }
  ];

}
