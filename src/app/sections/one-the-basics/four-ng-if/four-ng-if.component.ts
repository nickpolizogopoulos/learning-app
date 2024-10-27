import { Component } from '@angular/core';

import { lessonsHostClasses } from 'src/app/shared/lessons-host-classes';

@Component({
  selector: 'app-four-ng-if',
  template: `
  
    <h4>4. The *ngIf Directive</h4>
    <p class="lead">Show me your preference:</p>
    <div (click)="onHealthySelect()" class="form-check">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="veg">
      <label class="form-check-label" for="veg">Vegetables, Fruits, Healthy protein.</label>
    </div>
    <div (click)="onRealSelect()" class="form-check mb-3">
      <input class="form-check-input" type="radio" name="flexRadioDefault" id="pizza">
      <label class="form-check-label" for="pizza">Pizza, Burgers, French Fries.</label>
    </div>
    <h5 class="pt-4">Well<span style="font-size: 16px;" class="font-monospace">...</span></h5>
    <div *ngIf="healthyFood" class="alert alert-primary alert-dismissible mt-3 rounded-1">
      <span class="font-monospace">nice</span>
      <button (click)="onClose()" type="button" class="btn-close"></button>
    </div>
    <div *ngIf="realFood" class="alert alert-danger alert-dismissible mt-3 mb-3 rounded-1">
      <span class="font-monospace"> I
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
        </svg> you!
      </span>
      <button (click)="onClose()" type="button" class="btn-close"></button>
    </div>
  
  `,
  host: lessonsHostClasses
})
export class FourNgIfComponent {
  
  healthyFood: boolean = false;
  realFood: boolean = false;


  onHealthySelect(): void {
    this.healthyFood = true;
    this.realFood = false;
  }

  onRealSelect(): void {
    this.healthyFood = false;
    this.realFood = true;
  }

  onClose(): void {
    this.healthyFood = false;
    this.realFood = false;
  }

}
