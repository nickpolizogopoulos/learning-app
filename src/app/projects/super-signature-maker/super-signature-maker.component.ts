import { Component } from '@angular/core';



@Component({
  selector: 'app-super-signature-maker',
  templateUrl: './super-signature-maker.component.html',
  styleUrls: ['./super-signature-maker.component.css']
})
export class SuperSignatureMakerComponent {

  name:string = 'Nick';
  surname:string = 'Polizogopoulos';
  title:string = 'Jr. Front - End Web Developer';
  phone:string = '+30 6911111111';
  email:string = 'nick.p';



  // onSubmit():void {
  //   this.signature.name = this.name;
  //   this.signature.surname = this.surname;
  //   this.signature.title = this.title;
  //   this.signature.phone = this.phone;
  //   this.signature.email = this.email;
  //   this.name = '';
  //   this.surname = '';
  //   this.title = '';
  //   this.phone = '';
  //   this.email = '';
  // }

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
