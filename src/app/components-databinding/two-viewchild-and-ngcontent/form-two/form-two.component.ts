import { Component, EventEmitter, Output } from '@angular/core';
import { ItemProps } from '../two-viewchild-and-ngcontent.component';

@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styleUrls: ['./form-two.component.css']
})
export class FormTwoComponent {
  
  @Output() importantItem = new EventEmitter<ItemProps>();
  @Output() unimportantItem = new EventEmitter<ItemProps>();
  @Output() clearBothLists = new EventEmitter<Function>();

  infoMissingError:boolean = true;
  
  onAddImportant(nameInput:HTMLInputElement, descriptionInput:HTMLInputElement) {
    if (nameInput.value === '' || descriptionInput.value === ''){
      return
    }

    this.importantItem.emit({
      name: nameInput.value,
      description: descriptionInput.value,
      type: 'important'
    })
  }
  onAddUnimportant(nameInput:HTMLInputElement, descriptionInput:HTMLInputElement) {
    if (nameInput.value === '' || descriptionInput.value === ''){
      return
    }
    this.unimportantItem.emit({
      name: nameInput.value,
      description: descriptionInput.value,
      type: 'unimportant'
    })
  }
  onClearBoth():void {
    this.clearBothLists.emit(
      () => {}
    )
  }

}
