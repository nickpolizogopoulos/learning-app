import {
  Directive,
  ElementRef,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[appBlueBg]'
})
export class BlueBgDirective implements OnInit {

  constructor(
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = '#3656bf';
    this.elementRef.nativeElement.style.color = 'white';
  }

}
