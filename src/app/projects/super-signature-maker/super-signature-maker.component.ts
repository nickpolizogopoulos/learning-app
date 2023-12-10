import { Component } from '@angular/core';

interface PersonProps {
  name:string;
  surname:string;
  title:string;
  phone:string;
  email:string;
}

@Component({
  selector: 'app-super-signature-maker',
  templateUrl: './super-signature-maker.component.html',
  styleUrls: ['./super-signature-maker.component.css']
})
export class SuperSignatureMakerComponent {

  name:string = '';
  surname:string = '';
  title:string = '';
  phone:string = '';
  email:string = '';

  signature:PersonProps = {
    name: 'Nick',
    surname: 'Polizogopoulos',
    title: 'Jr. Front - End Web Developer',
    phone: '+30 6911111111',
    email: 'nick.polizogopoulos'
  }

  onSubmit():void {
    this.signature.name = this.name;
    this.signature.surname = this.surname;
    this.signature.title = this.title;
    this.signature.phone = this.phone;
    this.signature.email = this.email;
    this.name = '';
    this.surname = '';
    this.title = '';
    this.phone = '';
    this.email = '';
  }

  onResetAll():void {
    this.name = '';
    this.surname = '';
    this.title = '';
    this.phone = '';
    this.email = '';
    this.signature.name = 'Nick';
    this.signature.surname = 'Polizogopoulos';
    this.signature.title = 'Jr. Web Developer';
    this.signature.phone = '+30 6911111111';
    this.signature.email = 'nick.polizogopoulos';
  }

}
