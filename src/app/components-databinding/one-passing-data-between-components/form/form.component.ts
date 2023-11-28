import { Component, EventEmitter, Output } from '@angular/core';
import { ItemProps } from '../one-passing-data-between-components.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Output() itemAdded = new EventEmitter<ItemProps>()

  newItemName:string = '';
  newItemDescription:string = '';

 infoMissing = false;
  
  onAdd() {
    if (this.newItemName === '' ||
      this.newItemDescription === '') {
      this.infoMissing = true;
      return
    }
    this.itemAdded.emit({
      name: this.newItemName,
      description: this.newItemDescription
    })
    this.infoMissing = false;
    this.newItemName = '';
    this.newItemDescription = '';
  }
}