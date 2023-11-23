import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
  
  dataArray: string[] = [];
  data = '';

  constructor () {}

  addData() {
    this.dataArray.push(this.data);
    this.data = '';
  }

  removeData() {
    this.dataArray.pop()
  }

  clearArray() {
    this.dataArray.length = 0
  }


}
