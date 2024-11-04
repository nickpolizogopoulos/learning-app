import { Component, OnInit } from '@angular/core';

import { lessonsHostClasses } from 'src/app/shared/lessons-host-classes';

@Component({
  selector: 'app-two-renderer-directive',
  template: `
  
    <h4>2. Custom Attribute Directives using Renderer</h4>
    <p class="lead mb-4">Choose the size of the text.</p>
    <div class="mb-4 mt-3 headingbox row align-items-center shadows">
        <p *ngIf="smText" appSmSize>I am learning Angular!</p>
        <p *ngIf="mdText" appMdSize>I am learning Angular!</p>
        <p *ngIf="xlText" appXlSize>I am learning Angular!</p>
    </div>
    <div class="btn-group" role="group">
        <button (click)="onSmallClick()" [ngClass]="{'selected': smText}" class="btn">Small</button>
        <button (click)="onNormalClick()" [ngClass]="{'selected': mdText}" class="btn">Normal</button>
        <button (click)="onBigClick()" [ngClass]="{'selected': xlText}" class="btn">Big</button>
    </div>
  
  `,
  styles: `
  
    .btn {
      color: rgb(79, 79, 79);
      width: 100px;
      border: 1px solid rgb(79, 79, 79);
    }

    .btn-group {
        border: 1px solid rgb(161, 161, 161);
    }

    .selected {
        color: white;
        background-color: #3656bf;
    }

    .headingbox {
        height: 70px;
    }
  
  `,
  host: lessonsHostClasses
})
export class TwoRendererDirectiveComponent implements OnInit {

  ngOnInit(): void {
    this.mdText = true;
  }

  smText?:boolean;
  mdText?:boolean;
  xlText?:boolean;

  onSmallClick(): void {
    this.smText = true;
    this.mdText = false;
    this.xlText = false;
  }

  onNormalClick(): void {
    this.smText = false;
    this.mdText = true;
    this.xlText = false;
  }

  onBigClick(): void {
    this.smText = false;
    this.mdText = false;
    this.xlText = true;
  }
  
}
