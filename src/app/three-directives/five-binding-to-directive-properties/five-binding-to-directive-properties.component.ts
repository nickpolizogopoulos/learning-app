import { Component } from '@angular/core';

@Component({
  selector: 'app-five-binding-to-directive-properties',
  templateUrl: './five-binding-to-directive-properties.component.html',
  styleUrls: ['./five-binding-to-directive-properties.component.css']
})
export class FiveBindingToDirectivePropertiesComponent {

  fillColour:string = '';
  amaranth:string = '#e52b50';
  glaucous:string = '#6082b6';
  celadon:string = '#ace1af';
  extraInstructions:boolean = false;
  response:boolean = false;
  responseText?:string;

  onSelectAmaranth():void {
    this.fillColour = this.amaranth;
    this.extraInstructions = true;
    this.response = false;
  }
  onSelectGlaucous():void {
    this.fillColour = this.glaucous;
    this.extraInstructions = true;
    this.response = false;
  }
  onSelectCeladon():void {
    this.fillColour = this.celadon;
    this.extraInstructions = true;
    this.response = false;
  }
  onIconClick():void {
    this.extraInstructions = false;
    this.responseMessage()
    this.fillColour = '';
    
  }
  onFillClick():void {
    this.fillColour = '';
    this.extraInstructions = false;
    this.response = false;
  }
  responseMessage():string {
    this.response = true;
    return this.fillColour === '#e52b50' 
    ? this.responseText = 'Amaranth is a reddish-rose color that is a representation of the color of the flower of the amaranth plant.' 
    : this.fillColour === '#6082b6'
    ? this.responseText = 'Glaucous (from Ancient Greek γλαυκός (glaukós) is used to describe the pale grey or bluish-green appearance.'
    : this.fillColour === '#ace1af'
    ? this.responseText = 'Celadon is a term for pottery denoting both wares glazed in the jade green celadon color originated in China.'
    : ''
  }

}
