import { Component } from '@angular/core';



@Component({
  selector: 'app-super-signature-maker',
  templateUrl: './super-signature-maker.component.html',
  // styleUrls: ['./super-signature-maker.component.css']
  styles: [`
  
  .signature-card {
    margin-left: 30px;
    background-color: white;
    padding-top: 40px;
    box-shadow: 7px 7px 15px rgba(0, 0, 0, 0.245);
    border: 1px solid rgba(178, 178, 178, 0.384);
  }
  
  `]
})
export class SuperSignatureMakerComponent {

  name:string = 'Nick';
  surname:string = 'Polizogopoulos';
  title:string = 'Jr. Front - End Web Developer';
  phone:string = '+30 6911111111';
  email:string = 'nick.p';

  onSurnameUpdate( event:Event ):void {
    this.surname = (<HTMLInputElement>event.target).value;
  }

  onPositionUpdate( event:Event ):void {
    this.title = (<HTMLInputElement>event.target).value;
  }

  onPhoneUpdate( event:Event ):void {
    this.phone = (<HTMLInputElement>event.target).value;
  }

  onEmailUpdate( event:Event ):void {
    this.email = (<HTMLInputElement>event.target).value;
  }

  onNameUpdate( event:Event ) {
    this.name = (<HTMLInputElement>event.target).value;
  }

}
