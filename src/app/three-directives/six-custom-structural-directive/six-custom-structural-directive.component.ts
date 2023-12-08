import { Component } from '@angular/core';

@Component({
  selector: 'app-six-custom-structural-directive',
  templateUrl: './six-custom-structural-directive.component.html',
  styles: [`
  
  code {
    color: inherit;
    font-size: 17px;
  }
  .emojiImg {
    height: 30px;
    width: auto;
  }

  `]
})
export class SixCustomStructuralDirectiveComponent {

  firstResponse:boolean = false;
  secondResponse:boolean = false;
  lieDetector:boolean = false;
  okYesBtn:boolean = false;
  btnOne:boolean = true;
  btnTwo:boolean = true;

  onYes() {
    this.firstResponse = true;
    this.secondResponse = false;
  }
  onNo() {
    this.firstResponse = false;
    this.secondResponse = false;
    this.lieDetector = true;
    setTimeout(() => {
      this.lieDetector = false;
      this.btnOne = false;
      this.btnTwo = false;
      this.okYesBtn = true;
    }, 3000)
  }
  onOkYesClick() {
    this.secondResponse = true;
    this.okYesBtn = false;
    this.btnOne = true;
    this.btnTwo = true;
  }

}
