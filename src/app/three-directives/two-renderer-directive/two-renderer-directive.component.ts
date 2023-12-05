import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-renderer-directive',
  templateUrl: './two-renderer-directive.component.html',
  styleUrls: ['./two-renderer-directive.component.css']
})
export class TwoRendererDirectiveComponent implements OnInit {

  ngOnInit(): void {
    this.mdText = true;
  }
  smText?:boolean;
  mdText?:boolean;
  xlText?:boolean;

  onSmallClick() {
    this.smText = true;
    this.mdText = false;
    this.xlText = false;
  }
  onNormalClick() {
    this.smText = false;
    this.mdText = true;
    this.xlText = false;
  }
  onBigClick() {
    this.smText = false;
    this.mdText = false;
    this.xlText = true;
  }
}
