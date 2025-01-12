import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appYellowFilter]'
})
export class YellowFilterDirective {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
    ) {}
    
  @HostListener('mouseover') mouseover( eventData: Event ): void {
    this.renderer.addClass(this.element.nativeElement, 'yellowFilter');
  }

  @HostListener('mouseleave') mouseleave( eventData: Event ): void {
    this.renderer.removeClass(this.element.nativeElement, 'yellowFilter');
  }
  
}
