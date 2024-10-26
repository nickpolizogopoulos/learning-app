import { Component } from '@angular/core';

import { lessonHostClasses } from 'src/app/shared/host-classes';

@Component({
  selector: 'app-six-ng-for',
  template: `
  
    <h4>6. The *ngFor Directive</h4>
    <button [ngClass]="{'btn-secondary' : isVisible, 'btn-primary' : !isVisible}" (click)="buttonVisibility()" class="btn btn-sm rounded-1 mt-3 mb-2">
        {{ !isVisible ? 'Show instructions' : 'Hide instructions'}}
    </button>
    <div  *ngIf="isVisible">
        <p class="lead">Type a message and the number* of times you want it to be displayed.</p>
        <small>* <u>careful with the number</u> *</small>
    </div>
    <hr class="mb-4">
    <input [(ngModel)]="message" class="form-control rounded-1 shadow-none mb-2" placeholder="Type a message...">
    <input [(ngModel)]="userInput" class="form-control rounded-1 shadow-none" placeholder="Insert the number...">
    <div class="mt-3 mb-3">
        <button [disabled]="message === ''" (click)="start()" class="btn btn-outline-success rounded-1 me-2">Play!</button>
        <button [disabled]="message === '' && userInput === 0" (click)="reset()" class="btn btn-outline-success rounded-1">Reset</button>
    </div>
    <h5>Results:</h5>
    <p *ngFor="let item of arrayOfItems let i = index" class="mt-3">
        {{ i + 1 }}.&ensp;{{ item }}
    </p>
  
  `,
  host: lessonHostClasses
})
export class SixNgForComponent {

  // *ngIf
  isVisible: boolean = false;

  buttonVisibility(): void {
    this.isVisible = !this.isVisible;
  }

  // *ngFor
  arrayOfItems: string[] = [];
  message?: string;
  userInput?: number;

  start(): void {
    this.arrayOfItems.length = 0;
    for (let i = 0; i < this.userInput!; i++)
      this.arrayOfItems.push(this.message!);
  }

  reset(): void {
    this.arrayOfItems.length = 0;
    this.message = '';
    this.userInput = 0;
  }

}
