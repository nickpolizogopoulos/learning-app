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

  onSelectAmaranth() {
    this.fillColour = this.amaranth;
    this.extraInstructions = true;
    this.response = false;
  }
  onSelectGlaucous() {
    this.fillColour = this.glaucous;
    this.extraInstructions = true;
    this.response = false;
  }
  onSelectCeladon() {
    this.fillColour = this.celadon;
    this.extraInstructions = true;
    this.response = false;
  }
  onIconClick() {
    if (this.fillColour === '') return
    this.extraInstructions = false;
    this.response = true;
    this.fillColour = '';
  }
  onFillClick() {
    this.fillColour = '';
    this.extraInstructions = false;
    this.response = false;

  }

}
