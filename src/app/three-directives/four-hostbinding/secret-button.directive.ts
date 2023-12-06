import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSecretButton]'
})
export class SecretButtonDirective {

  constructor() {}
  
  @HostBinding('class.highLighter') classPass:string = '';
  @HostBinding('style.fontWeight') fontStrong:string = '';

  @HostListener('mouseover') mouseOver() {
    this.fontStrong = 'bold';
    this.classPass = 'highLighter';
  }
  @HostListener('mouseleave') mouseLeave() {
    this.fontStrong = '';
    this.classPass = '';
  }

}
