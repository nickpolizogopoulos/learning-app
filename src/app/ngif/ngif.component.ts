import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent {
  healthyFood = false;
  realFood = false;


  onHealthySelect() {
    this.healthyFood = true;
    this.realFood = false;
  }

  onRealSelect() {
    this.healthyFood = false;
    this.realFood = true;
  }

  onClose() {
    this.healthyFood = false;
    this.realFood = false;
  }
}
