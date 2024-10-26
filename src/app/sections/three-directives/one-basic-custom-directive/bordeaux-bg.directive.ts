import {
  Directive,
  ElementRef,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[appBordeauxBg]'
})
export class BordeauxBgDirective implements OnInit {

  constructor(
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = '#660021';
    this.elementRef.nativeElement.style.color = 'white';
  }
}
