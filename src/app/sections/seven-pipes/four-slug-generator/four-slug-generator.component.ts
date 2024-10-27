import { Component } from '@angular/core';

import { lessonsHostClasses } from 'src/app/shared/lessons-host-classes';

@Component({
  selector: 'app-four-slug-generator',
  template: `
  
    <h4>4. Slug Generator using Custom Pipe</h4>
    <p class="lead">Put your blog post title to generate your post URL.</p>
    <textarea type="text" rows="4" class="form-control mb-3" placeholder="Paste title here..." [(ngModel)]="textarea"></textarea>
    <button (click)="convert()" class="btn btn-primary rounded-1 me-3">Convert</button>
    <button (click)="reset()" class="btn btn-secondary rounded-1 me-3">Reset</button>
    <p *ngIf="result !== '' " class="lead mt-4">Result:</p>
    <p class="lead">{{ result | lowercase | symbolsToHyphens }}</p>
  
  `,
  host: lessonsHostClasses
})
export class FourSlugGeneratorComponent {

  textarea: string = '';
  result:string = '';

  convert(): void {
    this.result = this.textarea;
  }  

  reset(): void {
    this.textarea = '';
    this.result = '';
  }
  
}
