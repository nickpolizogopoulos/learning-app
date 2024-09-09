import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { lessonHostClasses } from 'src/app/shared/host-classes';

@Component({
  selector: 'app-two-void-state',
  template: `
  
    <h4>2. The "void" and "wildcard" States</h4>
    <p class="lead">Leave a quick note here.
      <span *ngIf="!submitted" (click)="onDummyNote()" class="addToTestText cursor-pointer">[ test text ]</span>
    </p>
    <div [@input] *ngIf="!submitted" class="box shadow">
      <textarea [(ngModel)]="paragraph" class="form-control rounded-1 shadow-none mb-3" rows="4" id=""></textarea>
      <div *ngIf="alert" class="alert alert-warning alert-dismissible fade show" role="alert">
        Please, add text!
        <button (click)="onCloseAlert()" type="button" class="btn-close"></button>
      </div>
      <button (click)="onSubmit()" class="btn btn-primary rounded-1">submit</button>
    </div>
    <div [@input] *ngIf="submitted" class="col d-flex flex-column align-items-center justify-content-center box shadow">
      <h4>{{title}}</h4>
      <p class="lead">{{paragraph}}</p>
      <button (click)="onDelete()" class="btn btn-sm btn-outline-success rounded-1 mt-2">new note</button>
    </div>
  
  `,
  styles: [`
    
    .box {
      margin: 24px;
      padding: 17px;
    }  
    
  `],
  animations: [

    trigger(
      'input',
      [
        state (
          'in',
          style({
            transform:'translateX(0)',
            opacity:1
          })
        ),
        transition(
          'void => *', [
            style({
              transform:'translateX(-330px)',
              opacity:0
            }),
            animate(170)
          ]),	
      ]
    )
    
  ],
  host: lessonHostClasses
})
export class TwoVoidStateComponent {
  
  timer = 1000;

  submitted:boolean = false;
  paragraph:string | null = null;
  title:string = 'My Note:';
  alert:boolean = false;

  onDummyNote():void {
    this.title = 'Useless Fact:'
    this.paragraph = 'On average, a human being will spend up to two weeks kissing in their lifetime.'
    this.onSubmit();
  }

  onCloseAlert():void { 
    this.alert = false;
  }

  onSubmit():void {
    if (!this.paragraph || this.paragraph.trim() === '') {
      this.alert = true;
      return;
    }
    this.submitted = true;
    this.onCloseAlert();
  }

  onDelete():void {
    this.paragraph = null;
    this.submitted = false;
    this.title = 'My Note:';
  }
}
