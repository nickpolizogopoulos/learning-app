import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ShoppingItemProps } from '../my-shopping-list.component';

@Component({
  selector: 'app-project-home-list',
  templateUrl: './project-home-list.component.html',
  styleUrls: ['./project-home-list.component.css']
})
export class ProjectHomeListComponent {

  @Input() homeItem!:ShoppingItemProps;
  @Output() deleteHomeItem = new EventEmitter<Function>()
  @Output() moveHomeItem = new EventEmitter<Function>()

  onDeleteItem():void {
    this.deleteHomeItem.emit(
      () => {}
    )
  }
  onMoveItem():void {
    this.moveHomeItem.emit(
      () => {}
    )
  }
}
