import { Component, EventEmitter, Output } from '@angular/core';
import { type ListItem } from '../one-passing-data-between-components.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent {

  @Output() immediateItemAdded = new EventEmitter<ListItem>();
  @Output() futureItemAdded = new EventEmitter<ListItem>();
  @Output() listCleared = new EventEmitter<Function>();

  newItemName: string = '';
  newItemDescription: string = '';
  infoMissing: boolean = false;
  
  onImmediateAdd(): void {
    if ( this.newItemName === '' || this.newItemDescription === '' ) {
      this.infoMissing = true;
      setTimeout(
        () => this.infoMissing = false,
        2000
      );
      return;
    }

    this.immediateItemAdded.emit({
      name: this.newItemName,
      description: this.newItemDescription,
      type: 'immediate'
    });

    this.infoMissing = false;
    this.newItemName = '';
    this.newItemDescription = '';
  }
  
  onFutureAdd(): void {
    if ( this.newItemName === '' || this.newItemDescription === '' ) {
      this.infoMissing = true;
      setTimeout(() =>
        this.infoMissing = false,
        2000
      );
      return;
    }

    this.futureItemAdded.emit({
      name: this.newItemName,
      description: this.newItemDescription,
      type: 'future'
    });

    this.infoMissing = false;
    this.newItemName = '';
    this.newItemDescription = '';
  }

  onClear(): void {
    this.listCleared.emit();
  }
  
}
