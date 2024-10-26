import {
  Directive,
  OnInit,
  ElementRef,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appMdSize]'
})
export class MdSizeDirective implements OnInit {

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.renderer.setStyle( this.element.nativeElement, 'fontSize', '20px' );
  }

}
