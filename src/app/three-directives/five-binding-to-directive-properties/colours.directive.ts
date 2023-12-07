import { 
  Directive, 
  HostBinding, 
  HostListener, 
  Input } from '@angular/core';

@Directive({
  selector: '[appColours]'
})
export class ColoursDirective {

  @Input() fillColor?:string;

  @HostBinding('style.color') color?:string = ''

  @HostListener('click') forFill() {
    this.color = this.fillColor;
  }

}
