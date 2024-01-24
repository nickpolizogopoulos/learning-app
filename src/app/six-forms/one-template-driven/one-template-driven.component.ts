import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-one-template-driven',
  templateUrl: './one-template-driven.component.html',
  styleUrls: ['./one-template-driven.component.css']
})
export class OneTemplateDrivenComponent {

  @ViewChild('form') form?:NgForm;
  alertSuccess:boolean = false;
  mailResults:boolean = false;

  emailData = {
    name: '',
    email: '',
    gender: '',
    message: '',
    check: false
  }

  putRandomMessage():void {
    const randomMessage = `Hey! I'm reaching out to see how things are going on your end. Drop me a line and let me know you're all good!`;

    this.form?.form.patchValue({
      message: randomMessage
    })
  }
  
  onSubmit():void {
    this.mailResults = true;
    console.log(this.form?.value);

    this.emailData.name = this.form?.value.name;
    this.emailData.email = this.form?.value.email;
    this.emailData.gender = this.form?.value.gender;
    this.emailData.message = this.form?.value.message;
    this.emailData.check = this.form?.value.check;

    this.alertSuccess = true;
    setTimeout(() => {
      this.alertSuccess = false;
    }, 1600)
    
    this.form?.reset()
  }

  fillTheForm():void {
    this.form?.setValue({
      name: 'Nick Polizogopoulos',
      email: 'test@test.com',
      gender: 'Male',
      message: `Hey! Just wanted to check in and make sure you're doing well. Let me know!`,
      check: true
    })
  }

  onCloseInfo():void {
    this.mailResults = false;
  }
}
