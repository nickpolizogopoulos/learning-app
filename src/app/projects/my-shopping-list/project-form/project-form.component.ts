import { Component, EventEmitter, Output } from '@angular/core';
import { ShoppingItemProps } from '../my-shopping-list.component';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent {

  @Output() foodItem = new EventEmitter<ShoppingItemProps>();
  @Output() homeItem = new EventEmitter<ShoppingItemProps>();
  @Output() clearLists = new EventEmitter<Function>();

  alertMessage:boolean = false;

  onAddFoodItem(
    name:HTMLInputElement,
    quantity:HTMLInputElement, 
    comment:HTMLInputElement
    )
  {
    if (
      name.value === '' || 
      quantity.valueAsNumber < 1 ||
      comment.value === ''
      ) {
        this.alertMessage = true;
        return
      } 
    this.alertMessage = false;
    this.foodItem.emit({
      name: name.value,
      quantity: quantity.valueAsNumber,
      comment: comment.value,
      type: 'food'
    });
    name.value = '';
    quantity.value = '';
    comment.value = '';
  }

  onAddHomeItem(
    name:HTMLInputElement, 
    quantity:HTMLInputElement, 
    comment:HTMLInputElement
    )
  {
    if (
      name.value === '' || 
      quantity.valueAsNumber < 1 ||
      comment.value === ''
      ) {
        this.alertMessage = true;
        return
      } 
    this.alertMessage = false;
    this.homeItem.emit({
      name: name.value,
      quantity: quantity.valueAsNumber,
      comment: comment.value,
      type: 'food'
    });
    name.value = '';
    quantity.value = '';
    comment.value = '';
  }
  onCloseAlert() {
    this.alertMessage = false;
  }
  onClearLists() {
    this.clearLists.emit(
      () => {}
    )
  }

}
