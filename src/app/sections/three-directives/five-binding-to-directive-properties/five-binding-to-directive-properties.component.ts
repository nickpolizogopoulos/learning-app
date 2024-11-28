import { Component } from '@angular/core';

import { lessonsHostClasses } from 'src/app/shared/lessons-host-classes';

@Component({
  selector: 'app-five-binding-to-directive-properties',
  templateUrl: './five-binding-to-directive-properties.component.html',
  host: lessonsHostClasses
})
export class FiveBindingToDirectivePropertiesComponent {

  defaultColour: string = '#6c757d';
  fillColour?: string;
  amaranth: string = '#e52b50';
  glaucous: string = '#6082b6';
  celadon: string = '#ace1af';
  extraInstructions: boolean = false;
  response?: boolean;
  responseText?: string;

  onSelectAmaranth(): void {
    this.fillColour = this.amaranth;
    this.extraInstructions = true;
    this.response = false;
  }

  onSelectGlaucous(): void {
    this.fillColour = this.glaucous;
    this.extraInstructions = true;
    this.response = false;
  }

  onSelectCeladon(): void {
    this.fillColour = this.celadon;
    this.extraInstructions = true;
    this.response = false;
  }

  onIconClick(): void {
    this.extraInstructions = false;
    this.responseMessage();
  }

  onFillClick(): void {
    this.fillColour = '#6c757d';
    this.extraInstructions = false;
    this.response = false;
    this.responseText = '';
  }

  responseMessage(): string {
    this.response = true;

    return ( 
        this.fillColour === '#e52b50' 
      ? this.responseText = 'Amaranth is a reddish-rose color that is a representation of the color of the flower of the amaranth plant.' 
      : this.fillColour === '#6082b6'
      ? this.responseText = 'Glaucous (from Ancient Greek γλαυκός (glaukós) is used to describe the pale grey or bluish-green appearance.'
      : this.fillColour === '#ace1af'
      ? this.responseText = 'Celadon is a term for pottery, denoting wares glazed in the jade green celadon color originated in China.'
      : ''
    );
  }

}
