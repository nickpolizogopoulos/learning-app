import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemProps } from '../two-viewchild-and-local-references.component';

@Component({
  selector: 'app-important',
  templateUrl: './important.component.html',
  styles: [`
  
  .wishBox {
    margin-bottom: 14px;
    border: 1px solid rgba(209, 209, 209, 0.25);
    border-radius: 3px;
    box-shadow: 4px 4px 7px #d8d8d8;
  }
  
  `]
})
export class ImportantComponent {

  @Output() clearImportantList = new EventEmitter<Function>();
  @Output() deleteImportantItem = new EventEmitter<Function>();
  @Output() moveImportantItem = new EventEmitter<Function>();

  @Input() importantListItem!:ItemProps;

  onClearImportantList() {
    this.clearImportantList.emit(
      () => {}
    )
  }
  onDeleteImportantItem() {
    this.deleteImportantItem.emit(
      () => {}
    )
  }
  onMoveToUnimportant() {
    this.moveImportantItem.emit(
      () => {}
    )
  }

}
