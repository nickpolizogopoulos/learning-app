import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  windowState:boolean = true;

  onCloseOnOpen():void {
    this.windowState = !this.windowState;
  }

}
