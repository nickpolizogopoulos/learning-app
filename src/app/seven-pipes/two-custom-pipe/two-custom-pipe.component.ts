import { Component } from '@angular/core';

@Component({
  selector: 'app-two-custom-pipe',
  template: `
  
    <h4>2. A Custom Pipe</h4>
    <p class="lead">Specify the length of the paragraph below.</p>
    
    <label [ngClass]="{'linethrough' : !isExpanded }">Characters: {{ pick.value }}</label>
    <input type="range" class="form-range" 
      #pick (input)="pick.value" 
      min="0" max="330" 
      [(ngModel)]="textLength" 
      [disabled]="!isExpanded">

    <p *ngIf="isExpanded" class="lead">{{ text | shorten: textLength }}
        <span *ngIf="text.length > textLength">
            <span *ngIf="isExpanded" (click)="onMoreLessSelect()" class="readMoreLess cursor-pointer">[ Read more ]</span>
            <span *ngIf="!isExpanded" (click)="onMoreLessSelect()" class="readMoreLess cursor-pointer">[ Read less ]</span>
        </span>
    </p>
    <p *ngIf="!isExpanded" class="lead">{{ text }}
        <span *ngIf="isExpanded" (click)="onMoreLessSelect()" class="readMoreLess cursor-pointer">[ Read more ]</span>
        <span *ngIf="!isExpanded" (click)="onMoreLessSelect()" class="readMoreLess cursor-pointer">[ Read less ]</span>
    </p>
  
  `,
  styles: [``]
})
export class TwoCustomPipeComponent {

  isExpanded:boolean = true;
  textLength:number = 137;

  text:string = `The Soyuz spacecraft is a Russian space vehicle 
  designed for human spaceflight. It has been in use since the 1960s and 
  remains a key component of the Russian space program. Soyuz has transported 
  astronauts to the International Space Station and is known 
  for its robustness and versatility in various mission profiles.`;

  onMoreLessSelect():void {
    this.isExpanded = !this.isExpanded;
  }

}
