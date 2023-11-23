import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
  
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
