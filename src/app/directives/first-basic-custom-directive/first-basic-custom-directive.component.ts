import { Component } from '@angular/core';

@Component({
  selector: 'app-first-basic-custom-directive',
  templateUrl: './first-basic-custom-directive.component.html',
  styleUrls: ['./first-basic-custom-directive.component.css']
})
export class FirstBasicCustomDirectiveComponent {

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
