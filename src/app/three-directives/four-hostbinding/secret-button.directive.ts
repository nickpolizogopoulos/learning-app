import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSecretButton]'
})
export class SecretButtonDirective {

  constructor() {}
  
  @HostBinding('class.text-success') classPass:string = '';
  @HostBinding('style.fontWeight') fontStrong:string = '';

  @HostListener('mouseover') mouseOver() {
    this.fontStrong = 'bold';
    this.classPass = 'text-success';
  }
  @HostListener('mouseleave') mouseLeave() {
    this.fontStrong = '';
    this.classPass = '';
  }

}
