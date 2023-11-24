import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else-directive',
  templateUrl: './if-else-directive.component.html',
  styleUrls: ['./if-else-directive.component.css']
})
export class IfElseDirectiveComponent {

  healthyFood = false;
  realFood = false;

  onHealthySelect() {
    this.healthyFood = true;
    this.realFood = false;
  }

  onRealSelect() {
    this.healthyFood = !true;
    this.realFood = !false;
  }


  reset() {
    this.healthyFood = false;
    this.realFood = false;
  }
  
}

