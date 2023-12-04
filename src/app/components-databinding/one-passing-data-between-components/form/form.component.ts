import { Component, EventEmitter, Output } from '@angular/core';
import { ItemProps } from '../one-passing-data-between-components.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Output() immediateItemAdded = new EventEmitter<ItemProps>()
  @Output() futureItemAdded = new EventEmitter<ItemProps>()
  @Output() listCleared = new EventEmitter<Function>()

  newItemName:string = '';
  newItemDescription:string = '';
  infoMissing:boolean = false;
  
  onImmediateAdd():void {
    if (this.newItemName === '' ||
      this.newItemDescription === '') {
      this.infoMissing = true;
      setTimeout(() => {
        this.infoMissing = false;
      }, 2000)
      return
    }
    this.immediateItemAdded.emit({
      name: this.newItemName,
      description: this.newItemDescription,
      type: 'immediate'
    })
    this.infoMissing = false;
    this.newItemName = '';
    this.newItemDescription = '';
  }
  
  onFutureAdd():void {
    if (this.newItemName === '' ||
      this.newItemDescription === '') {
      this.infoMissing = true;
      setTimeout(() => {
        this.infoMissing = false;
      }, 2000)
      return
    }
    this.futureItemAdded.emit({
      name: this.newItemName,
      description: this.newItemDescription,
      type: 'future'
    })
    this.infoMissing = false;
    this.newItemName = '';
    this.newItemDescription = '';
  }

  onClear() {
    this.listCleared.emit(
      () => {}
    )
  }
}
