import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSecretButton]'
})
export class SecretButtonDirective {

  constructor() {

  }
  
  @HostBinding('class.text-success') classPass:string = '';
  @HostBinding('style.fontWeight') fontStrong:string = '';
  @HostBinding('class.cursor-pointer') cursorClass:string = '';

  @HostListener('mouseover') mouseOver() {
    this.fontStrong = 'bold';
    this.classPass = 'text-success';
    this.cursorClass = 'cursor-pointer';
  }
  @HostListener('mouseleave') mouseLeave() {
    this.fontStrong = '';
    this.classPass = '';
    this.cursorClass = '';
  }

}
