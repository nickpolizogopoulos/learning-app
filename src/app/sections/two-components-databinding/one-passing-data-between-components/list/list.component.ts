import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { type ListItem } from '../one-passing-data-between-components.component';

@Component({
  selector: 'app-list',
  template: `
  
    <div class="wishBox alert alert-dismissible align-items-center">
      <ng-content />
      <button (click)="deleteItem()" type="button" class="btn-close shadow-none"></button>
    </div>
  
  `,
  styles: `
  
    .wishBox {
      margin-bottom: 14px;
      border: 1px solid rgba(209, 209, 209, 0.25);
      border-radius: 3px;
      box-shadow: 4px 4px 7px #d8d8d8;
    }

  `
})
export class ListComponent {

  @Input() listItem?: ListItem;
  @Output() onDeleteItem = new EventEmitter<void>();

  deleteItem(): void {
    this.onDeleteItem.emit();
  }

}
