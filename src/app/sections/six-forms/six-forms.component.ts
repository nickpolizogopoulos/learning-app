import { Component } from '@angular/core';

@Component({
  selector: 'app-six-forms',
  template: `
  
    <h2>Forms - 2 Lessons.
      <span (click)="onInfoClick()" class="lead cursor-pointer">{{ information ? '[ close ]' : '[ info ]' }}</span>
      <span *ngIf="information" class="lead">
        Both forms are made for demonstration purposes only. 
        They <u><strong>do not</strong></u> collect, store or send data, anywhere. 
      </span>
    </h2>
    <section class="container-fluid">
      <div class="row mt-4 pt-4 d-flex justify-content-around">
        <app-one-template-driven-form />
        <app-two-reactive-form />
      </div>
    </section>
  
  `
})
export class SixFormsComponent {

  information: boolean = false;

  onInfoClick(): void {
    this.information = !this.information;
  }
}
