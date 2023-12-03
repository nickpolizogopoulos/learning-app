import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemProps } from '../two-viewchild-and-ngcontent.component';

@Component({
  selector: 'app-unimportant',
  templateUrl: './unimportant.component.html',
  styleUrls: ['./unimportant.component.css']
})
export class UnimportantComponent {
  
  @Input() unimportantListItem!:ItemProps;
  @Output() deleteUnimportantItem = new EventEmitter<Function>()
  @Output() moveUnimportantItem = new EventEmitter<Function>()


  onDeleteUnimportantItem() {
    this.deleteUnimportantItem.emit(
      () => {}
    )
  }
  onMoveToUnimportant() {
    this.moveUnimportantItem.emit(
      () => {}
    )
  }  
}
