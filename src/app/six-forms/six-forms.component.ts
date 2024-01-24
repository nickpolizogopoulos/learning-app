import { Component } from '@angular/core';

@Component({
  selector: 'app-six-forms',
  // templateUrl: './six-forms.component.html',
  template: `
  
    <h2><mark>Forms - 2 Lessons.
      <span (click)="onInfoClick()" class="lead cursor-pointer">[ click for info ]</span>
      <span *ngIf="information" class="lead">
        Both forms are made for demonstration purposes only. They <u>do not</u> 
        collect data nor store it or send it somewhere via actual emails.
      </span>
    </mark></h2>
    <section class="container-fluid">
      <div class="row mt-4 pt-4 d-flex justify-content-around">
          <app-one-template-driven class="lessonbox col-md-6 col-lg-5 col-xxl-3"></app-one-template-driven>
      </div>
    </section>
  
  `,
  styles: [``]
})
export class SixFormsComponent {

  information:boolean = false;

  onInfoClick():void {
    this.information = !this.information;
  }
}
