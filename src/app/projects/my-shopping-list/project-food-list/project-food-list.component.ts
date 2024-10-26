import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { type ShoppingItem } from '../my-shopping-list.component';

@Component({
  selector: 'app-project-food-list',
  templateUrl: './project-food-list.component.html'
})
export class ProjectFoodListComponent {

  @Input() foodItem!: ShoppingItem;
  @Output() deleteFoodItem = new EventEmitter<void>();
  @Output() moveFoodItem = new EventEmitter<void>();

  onDeleteItem(): void {
    this.deleteFoodItem.emit();
  }

  onMoveItem(): void {
    this.moveFoodItem.emit();
  }
}
