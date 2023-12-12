import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemProps } from '../two-viewchild-and-local-references.component';

@Component({
  selector: 'app-unimportant',
  templateUrl: './unimportant.component.html',
  styles: [`
  
  .wishBox {
    margin-bottom: 14px;
    border: 1px solid rgba(209, 209, 209, 0.25);
    border-radius: 3px;
    box-shadow: 4px 4px 7px #d8d8d8;
  }
  
  
  `]
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
