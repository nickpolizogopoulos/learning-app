import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

// type result = boolean | null | undefined;

@Component({
  selector: 'app-one-template-driven',
  templateUrl: './one-template-driven.component.html',
  styleUrls: ['./one-template-driven.component.css']
})
export class OneTemplateDrivenComponent {

  @ViewChild('form') form?:NgForm;
  alertSuccess:boolean = false;
  
  onSubmit():void {
    console.log(this.form?.value);
    console.log(this.form?.valid ? 'FORM VALID' : 'FORM NOT VALID');
    console.log(this.form?.touched ? 'FORM TOUCHED' : 'FORM NOT TOUCHED');

    this.alertSuccess = true;
    setTimeout(() => {
      this.alertSuccess = false;
    }, 3000)
    
  }
}
