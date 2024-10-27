import { Component } from '@angular/core';

import { lessonsHostClasses } from 'src/app/shared/lessons-host-classes';

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

  `],
  host: lessonsHostClasses
})
export class SixCustomStructuralDirectiveComponent {

  firstResponse: boolean = false;
  secondResponse: boolean = false;
  lieDetector: boolean = false;
  okYesBtn: boolean = false;
  btnOne: boolean = true;
  btnTwo: boolean = true;

  onYes(): void {
    this.firstResponse = true;
    this.secondResponse = false;
  }

  onNo(): void {
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

  onOkYesClick(): void {
    this.secondResponse = true;
    this.okYesBtn = false;
    this.btnOne = true;
    this.btnTwo = true;
  }

  onReset(): void {
    this.firstResponse = false;
    this.secondResponse = false;
  }

}
