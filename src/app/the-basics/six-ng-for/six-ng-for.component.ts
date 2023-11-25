import { Component } from '@angular/core';

@Component({
  selector: 'app-six-ng-for',
  templateUrl: './six-ng-for.component.html',
  styleUrls: ['./six-ng-for.component.css']
})
export class SixNgForComponent {

  // *ngIf
  isVisible = false;
  buttonVisibility() {
    this.isVisible = !this.isVisible;
  }

  // *ngFor
  arrayOfItems:string[] = [];
  message = '';
  userInput = 0;

  start() {
    this.arrayOfItems.length = 0;
    for (let i = 0; i < this.userInput; i++)
      this.arrayOfItems.push(this.message);
  }
  reset() {
    this.arrayOfItems.length = 0;
    this.message = '';
    this.userInput = 0;
  }
}
