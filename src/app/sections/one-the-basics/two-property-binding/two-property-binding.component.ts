import { Component } from '@angular/core';

import { lessonsHostClasses } from 'src/app/shared/lessons-host-classes';

@Component({
  selector: 'app-two-property-binding',
  template: `
  
    <h4>2. Property Binding</h4>
    <p class="lead">Add your own items to the grocery list.</p>
    <input
      class="form-control rounded-1 shadow-none"
      type="text"
      placeholder="Type here..."
      [(ngModel)]="data">

    <div class="pt-3">
      <button
        (click)="addData()"
        [disabled]="data === '' ? true : false" 
        class="btn btn-primary rounded-1 me-2 mb-2"
        >Add item
      </button>  
      <button
        (click)="removeData()"
        [disabled]="isDisabled"
        class="btn btn-warning rounded-1 me-2 mb-2"
        >Remove last
      </button>  
      <button
        (click)="clearArray()"
        [disabled]="isDisabled"
        class="btn btn-secondary rounded-1 me-3 mb-2"
      >Clear list
      </button>  
    </div>

    <h5 class="pt-4">Grocery list:</h5>
    <small>{{ dataArray.length === 0 ? 'The list is empty!' : '' }}</small>
    <div *ngFor="let item of dataArray">
      <input class="form-check-input checkborder rounded-0 shadow-none" type="checkbox">
      {{ item }}
    </div>
  
  `,
  styles: `
  
    .checkborder {
      border-color: rgb(176, 176, 176);
    }
  
  `,
  host: lessonsHostClasses
})
export class TwoPropertyBindingComponent {

  isDisabled = true;
  dataArray: string[] = [];
  data: string = '';

  addData(): void {
    this.dataArray.push(this.data);
    this.data = '';
    this.isDisabled = false;
  }

  removeData(): void { 
    this.dataArray.pop()
    if (this.dataArray.length === 0)
      this.isDisabled = true;
  }
  
  clearArray(): void {
    this.dataArray.length = 0;
    this.isDisabled = true;
  }
  
}
