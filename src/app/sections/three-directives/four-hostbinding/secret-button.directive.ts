import { Directive, ElementRef, HostBinding, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appSecretButton]',

  //* for the newer approach
  // host: {
  //   '(mouseover)': 'mouseOver()',
  //   '(mouseleave)': 'mouseLeave()'
  // }
})
export class SecretButtonDirective {
  
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

  //* for the newer approach

  // private elementRef = inject(ElementRef);

  // mouseOver() {
  //   this.fontStrong = 'bold';
  //   this.classPass = 'text-success';
  //   this.cursorClass = 'cursor-pointer';
  // }

  // mouseLeave() {
  //   this.fontStrong = '';
  //   this.classPass = '';
  //   this.cursorClass = '';
  // }

}
