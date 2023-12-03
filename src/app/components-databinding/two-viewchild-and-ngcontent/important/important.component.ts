import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemProps } from '../two-viewchild-and-ngcontent.component';

@Component({
  selector: 'app-important',
  templateUrl: './important.component.html',
  styleUrls: ['./important.component.css']
})
export class ImportantComponent {

  @Output() clearImportantList = new EventEmitter<Function>();
  @Output() deleteImportantItem = new EventEmitter<Function>();

  @Input() importantItem!:ItemProps;

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

}
