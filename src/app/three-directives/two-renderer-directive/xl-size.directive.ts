import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appXlSize]'
})
export class XlSizeDirective implements OnInit {

  constructor(
    private element:ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.renderer.setStyle(this.element.nativeElement, 'fontSize', '30px' )
  }

}
