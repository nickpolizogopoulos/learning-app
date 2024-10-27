import {
  Component,
  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';

import { lessonsHostClasses } from 'src/app/shared/lessons-host-classes';

@Component({
  selector: 'app-one-template-driven-form',
  templateUrl: './one-template-driven-form.component.html',
  host: lessonsHostClasses
})
export class OneTemplateDrivenFormComponent {

  @ViewChild('form') form?: NgForm;
  alertSuccess: boolean = false;
  mailResults: boolean = false;

  emailData = {
    name: '',
    email: '',
    priority: '',
    message: '',
    check: false
  }

  putRandomMessage(): void {
    const randomMessage = `Hey! I'm reaching out to see how things are going on your end. Drop me a line and let me know you're all good!`;

    this.form?.form.patchValue({
      message: randomMessage
    });
  }
  
  onSubmit(): void {
    this.mailResults = true;
    console.log(this.form?.value);

    this.emailData.name = this.form?.value.name;
    this.emailData.email = this.form?.value.email;
    this.emailData.priority = this.form?.value.priority;
    this.emailData.message = this.form?.value.message;
    this.emailData.check = this.form?.value.check;

    this.alertSuccess = true;
    setTimeout(() =>
      this.alertSuccess = false,
      1600
    );
    
    this.form!.reset();
  }

  fillTheForm(): void {
    this.form?.setValue({
      name: 'Nick Polizogopoulos',
      email: 'test@test.com',
      priority: 'High',
      message: `Hey! Just wanted to check in and make sure you're doing well. Let me know!`,
      check: true
    });
  }

  onCloseInfo(): void {
    this.mailResults = false;
  }
  
}
