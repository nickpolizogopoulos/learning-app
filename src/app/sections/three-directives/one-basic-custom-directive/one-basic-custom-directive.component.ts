import { Component } from '@angular/core';

import { lessonHostClasses } from 'src/app/shared/host-classes';

@Component({
  selector: 'app-one-basic-custom-directive',
  templateUrl: './one-basic-custom-directive.component.html',
  styles: [`
  
    .btn-blueBg {
      color: white;
      background-color: #3656bf;
    }

    .blueLike {
        color: #3656bf;
    }

    .btn-bordeauxBg {
        color: white;
        background-color: #660021;
    }

    .emojiImg {
        height: 50px;
        width: auto;
    }

    .text {
        border-radius: 3px;
        box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.2);
    }
  
  `],
  host: lessonHostClasses
})
export class OneBasicCustomDirectiveComponent {

  blueBg: boolean = false;
  bordeauxBg: boolean = false;

  onBlueClick(): void {
    this.blueBg = true;
    this.bordeauxBg = false;
  }

  onBordeauxClick(): void {
    this.bordeauxBg = true;
    this.blueBg = false;
  }

  onResetColor(): void {
    this.bordeauxBg = false;
    this.blueBg = false;
  }

}
