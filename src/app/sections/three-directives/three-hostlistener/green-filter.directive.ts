import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appGreenFilter]'
})
export class GreenFilterDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
    ) {}

  @HostListener('mouseover') mouseover( eventData: Event ): void {
    this.renderer.addClass(this.element.nativeElement, 'greenFilter');
  }
  
  @HostListener('mouseleave') mouseleave( eventData: Event ): void {
    this.renderer.removeClass(this.element.nativeElement, 'greenFilter');
  }

}
