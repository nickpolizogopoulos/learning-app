import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild
} from '@angular/core';

import { type ListItem } from '../two-viewchild-and-local-references.component';

@Component({
  selector: 'app-form-two',
  templateUrl: './form-two.component.html'
})
export class FormTwoComponent {
  
  @Output() importantItem = new EventEmitter<ListItem>();
  @Output() unimportantItem = new EventEmitter<ListItem>();
  @Output() clearBothLists = new EventEmitter<void>();
  @ViewChild('itemDescription', { static: true }) itemDescription?: ElementRef;

  infoMissingError: boolean = false;
  
  onAddImportant(nameInput: HTMLInputElement): void {
    if (nameInput.value === '' || 
      this.itemDescription?.nativeElement.value === '') {
      this.infoMissingError = true;
      setTimeout(() =>
        this.infoMissingError = false,
        2000
      );
      return;
    }
    this.infoMissingError = false;
    this.importantItem.emit({
      name: nameInput.value,
      description: this.itemDescription?.nativeElement.value,
    });
    //To reset the form when adding an item.
    nameInput.value = '';
    this.itemDescription!.nativeElement.value = '';
  }
  onAddUnimportant( nameInput: HTMLInputElement ): void {

    if ( nameInput.value === '' || this.itemDescription?.nativeElement.value === '' ) {
      this.infoMissingError = true;
      setTimeout(() =>
        this.infoMissingError = false,
        2000
      );
      return;
    }

    this.infoMissingError = false;
    this.unimportantItem.emit({
      name: nameInput.value,
      description: this.itemDescription?.nativeElement.value
    });

    //To reset the form when adding an item.
    nameInput.value = '';
    this.itemDescription!.nativeElement.value = '';
  }

  onClearBoth(): void {
    this.clearBothLists.emit();
  }

}
