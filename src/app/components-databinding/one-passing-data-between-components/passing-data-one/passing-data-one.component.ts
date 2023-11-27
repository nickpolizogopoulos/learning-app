import { Component } from '@angular/core';




@Component({
  selector: 'app-passing-data-one',
  templateUrl: './passing-data-one.component.html',
  styleUrls: ['./passing-data-one.component.css']
})
export class PassingDataOneComponent {
  
  name:string = '';
  quantity:number = 0;
  

  onAdd() {
    // this.shoppingList.push(
    //   { name: this.name, quantity: this.quantity }
    // )
  }

  onClear() {
    // this.shoppingList.length = 0;
  }
}
