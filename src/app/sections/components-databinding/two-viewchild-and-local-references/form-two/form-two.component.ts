import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ItemProps } from '../two-viewchild-and-local-references.component';

@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html',
  styleUrls: ['./form-two.component.css']
})
export class FormTwoComponent {
  
  @Output() importantItem = new EventEmitter<ItemProps>();
  @Output() unimportantItem = new EventEmitter<ItemProps>();
  @Output() clearBothLists = new EventEmitter<Function>();
  @ViewChild('itemDescription', {static:true}) itemDescription?:ElementRef;

  infoMissingError:boolean = false;
  
  onAddImportant(nameInput:HTMLInputElement) {
    if (nameInput.value === '' || 
      this.itemDescription?.nativeElement.value === '') {
      this.infoMissingError = true;
      setTimeout(() => {
        this.infoMissingError = false;
      }, 2000)
      return
    }
    this.infoMissingError = false;
    this.importantItem.emit({
      name: nameInput.value,
      description: this.itemDescription?.nativeElement.value,
    })
    //To reset the form when adding an item.
    nameInput.value = '';
    this.itemDescription!.nativeElement.value = '';
  }
  onAddUnimportant(nameInput:HTMLInputElement) {
    if (nameInput.value === '' || 
      this.itemDescription?.nativeElement.value === '') {
      this.infoMissingError = true;
      setTimeout(() => {
        this.infoMissingError = false;
      }, 2000)
      return
    }
    this.infoMissingError = false;
    this.unimportantItem.emit({
      name: nameInput.value,
      description: this.itemDescription?.nativeElement.value,
    })
    //To reset the form when adding an item.
    nameInput.value = '';
    this.itemDescription!.nativeElement.value = '';
  }
  onClearBoth():void {
    this.clearBothLists.emit(
      () => {}
    )
  }

}
