import { Directive, ElementRef, OnInit } from '@angular/core';

//blue
@Directive({
  selector: '[appBgHighlightDirective]'
})
export class BgHighlightDirectiveDirective implements OnInit {

  constructor(private elementRef:ElementRef ) { }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = '#3656bf'
    this.elementRef.nativeElement.style.color = 'white'
  }

}
