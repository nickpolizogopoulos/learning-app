import {
  Directive,
  OnInit,
  ElementRef,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appSmSize]'
})
export class SmSizeDirective implements OnInit {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.renderer.setStyle( this.element.nativeElement, 'fontSize', '14px' );
  }

}
