import { Component } from '@angular/core';

@Component({
  selector: 'app-seven-ng-style',
  templateUrl: './seven-ng-style.component.html',
  styleUrls: ['./seven-ng-style.component.css']
})
export class SevenNgStyleComponent {

  showResult = false;
  spinnerOn = false;
  result = 'Tails';

  onFlip() {
    this.spinnerOn = true;
    setTimeout(() => {
      this.spinnerOn = false;
    }, 1000);
    
    this.result = Math.random() > 0.5 ? 'Tails' : 'Heads';

    this.showResult = false;
    setTimeout(() => {
      this.showResult = true;
    }, 1000);
  }

  getResult() {
    return this.result === 'Tails' ? '#add5ff' : '#ffadad';
  }
  
  reset() {
    this.showResult = false;
    this.spinnerOn = false;
  }
}