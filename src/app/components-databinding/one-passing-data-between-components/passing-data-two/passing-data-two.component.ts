import { Component, Input, Output } from '@angular/core';

export interface ShoppingListProps {
  name: string;
  quantity: number;
}

@Component({
  selector: 'app-passing-data-two',
  templateUrl: './passing-data-two.component.html',
  styleUrls: ['./passing-data-two.component.css']
})
export class PassingDataTwoComponent {

  // THIS USES 'Definite Assignment Assertion' => !
  // to tell typescript that this variable will have
  // a value at runtime as follows:
  element!:ShoppingListProps;

}
