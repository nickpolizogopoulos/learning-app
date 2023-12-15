import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  calculation:string[] = ['4','8','+','5','2']
  result:number = 10000000;

  windowState:boolean = true;
  onCloseOnOpen():void {
    this.windowState = !this.windowState;
  }
  onAllClearClick() {
    this.result = 0;
    this.calculation.length = 0;
    this.calculation.push('0')
  }
  onPlusMinusClick() {
    this.result = this.result - (this.result * 2);
  }

}
