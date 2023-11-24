import { Component } from '@angular/core';

@Component({
  selector: 'app-if-for-directives',
  templateUrl: './if-for-directives.component.html',
  styleUrls: ['./if-for-directives.component.css']
})
export class IfForDirectivesComponent {

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
