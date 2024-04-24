import { Component } from '@angular/core';

@Component({
  selector: 'app-one-using-ngif',
  templateUrl: './one-using-ngif.component.html',
  styles: [``]
})
export class OneUsingNgifComponent {

  buttonPushed:boolean = false;
  announcement:string | null = null;
  mimironsQuote:string | null = null;
  alertMessage:string | null = null;
  alertQuote:string | null = null;

  onRedButtonPush():void {

    this.buttonPushed = !this.buttonPushed;
    this.announcement = `"Self-destruct sequence initiated. This area will" self-destruct in 10 minutes.`;

    setTimeout(() => {
      this.mimironsQuote = `"Now, why would you go and do something like that? 
      Didn't you see the sign that said, "DO NOT PUSH THIS BUTTON!"? How will we 
      finish testing with the self-destruct mechanism active?"`;

      this.announcement = null;
    }, 4200);

    setTimeout(() => {
      this.alertMessage = 'Outplayed!';
      this.alertQuote = 'You can do better than that!';
    }, 12000);
  }
  
  alertClose():void {
    this.mimironsQuote = null;
    this.alertMessage = null;
    this.buttonPushed = false;
  }
  
}
