import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { type ListItem } from '../two-viewchild-and-local-references.component';

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

  @Output() clearImportantList = new EventEmitter<void>();
  @Output() deleteImportantItem = new EventEmitter<void>();
  @Output() moveImportantItem = new EventEmitter<void>();

  @Input() importantListItem!: ListItem;

  onClearImportantList(): void {
    this.clearImportantList.emit();
  }

  onDeleteImportantItem(): void {
    this.deleteImportantItem.emit();
  }

  onMoveToUnimportant(): void {
    this.moveImportantItem.emit();
  }

}
