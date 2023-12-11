import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShoppingItemProps } from '../my-shopping-list.component';



@Component({
  selector: 'app-project-food-list',
  templateUrl: './project-food-list.component.html',
  styleUrls: ['./project-food-list.component.css']
})
export class ProjectFoodListComponent {

  @Input() foodItem!:ShoppingItemProps;
  @Output() deleteFoodItem = new EventEmitter<Function>();
  @Output() moveFoodItem = new EventEmitter<Function>();

  onDeleteItem():void {
    this.deleteFoodItem.emit(
      () => {}
    )
  }
  onMoveItem():void {
    this.moveFoodItem.emit(
      () => {}
    )
  }
}
