import { Component } from '@angular/core';

@Component({
  selector: 'app-two-property-binding',
  templateUrl: './two-property-binding.component.html',
  styles: [`
  
  .checkborder {
    border-color: rgb(176, 176, 176);
  }
  
  `]
})
export class TwoPropertyBindingComponent {

  isDisabled = true;
  dataArray: string[] = [];
  data = '';

  addData() {
    this.dataArray.push(this.data);
    this.data = '';
    this.isDisabled = false;
  }
  removeData() { 
    this.dataArray.pop()
    if (this.dataArray.length === 0) this.isDisabled = true;
  }
  clearArray() {
    this.dataArray.length = 0;
    this.isDisabled = true;
  }
  
}