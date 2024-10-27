import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { ShoppingItem } from '../my-shopping-list.component';

@Component({
  selector: 'app-project-home-list',
  templateUrl: './project-home-list.component.html'
})
export class ProjectHomeListComponent {

  @Input() homeItem!: ShoppingItem;
  @Output() deleteHomeItem = new EventEmitter<void>();
  @Output() moveHomeItem = new EventEmitter<void>()

  onDeleteItem(): void {
    this.deleteHomeItem.emit();
  }

  onMoveItem(): void {
    this.moveHomeItem.emit();
  }
  
}
