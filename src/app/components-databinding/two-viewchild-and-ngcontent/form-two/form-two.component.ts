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

  infoMissingError:boolean = false;
  
  onAddImportant(nameInput:HTMLInputElement, descriptionInput:HTMLInputElement) {
    if (nameInput.value === '' || descriptionInput.value === ''){
      this.infoMissingError = true;
      setTimeout(() => {
        this.infoMissingError = false;
      }, 2000)
      return
    }
    this.infoMissingError = false;
    this.importantItem.emit({
      name: nameInput.value,
      description: descriptionInput.value,
    })
    //These reset the form when adding an item.
    nameInput.value = '';
    descriptionInput.value = '';
  }
  onAddUnimportant(nameInput:HTMLInputElement, descriptionInput:HTMLInputElement) {
    if (nameInput.value === '' || descriptionInput.value === ''){
      this.infoMissingError = true;
      setTimeout(() => {
        this.infoMissingError = false;
      }, 2000)
      return
    }
    this.infoMissingError = false;
    this.unimportantItem.emit({
      name: nameInput.value,
      description: descriptionInput.value,
    })
    //These reset the form when adding an item.
    nameInput.value = '';
    descriptionInput.value = '';
  }
  onClearBoth():void {
    this.clearBothLists.emit(
      () => {}
    )
  }

}
