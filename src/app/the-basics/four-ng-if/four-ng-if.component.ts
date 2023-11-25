import { Component } from '@angular/core';

@Component({
  selector: 'app-four-ng-if',
  templateUrl: './four-ng-if.component.html',
  styleUrls: ['./four-ng-if.component.css']
})
export class FourNgIfComponent {
  
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
