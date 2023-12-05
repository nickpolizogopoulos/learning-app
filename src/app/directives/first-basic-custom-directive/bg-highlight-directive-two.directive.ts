import { Directive, ElementRef, OnInit } from '@angular/core';

//bordeaux
@Directive({
  selector: '[appBgHighlightDirectiveTwo]'
})
export class BgHighlightDirectiveTwoDirective implements OnInit {

  constructor(private elementRef:ElementRef ) { }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = '#660021'
    this.elementRef.nativeElement.style.color = 'white'
  }
}
