import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemProps } from '../one-passing-data-between-components.component';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  // element has the 'Definite Assignment Assertion' => !
  // to tell typescript that this variable will have
  // a value at runtime.
  @Input() element!:ItemProps;
  @Output() onDeleteItem = new EventEmitter<Function>()

  deleteItem():void {
    this.onDeleteItem.emit(
      () => {}
    ) 
  }  
}
