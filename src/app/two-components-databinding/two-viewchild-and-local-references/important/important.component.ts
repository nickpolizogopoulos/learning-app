import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemProps } from '../two-viewchild-and-local-references.component';

@Component({
  selector: 'app-important',
  templateUrl: './important.component.html',
  styleUrls: ['./important.component.css']
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
