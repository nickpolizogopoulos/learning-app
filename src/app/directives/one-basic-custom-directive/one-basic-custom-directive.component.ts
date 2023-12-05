import { Component } from '@angular/core';

@Component({
  selector: 'app-one-basic-custom-directive',
  templateUrl: './one-basic-custom-directive.component.html',
  styleUrls: ['./one-basic-custom-directive.component.css']
})
export class OneBasicCustomDirectiveComponent {

  blueBg:boolean = false;
  bordeauxBg:boolean = false;

  onBlueClick() {
    this.blueBg = true;
    this.bordeauxBg = false;
  }
  onBordeauxClick() {
    this.bordeauxBg = true;
    this.blueBg = false;
  }
  onResetColor() {
    this.bordeauxBg = false;
    this.blueBg = false;
  }
}
