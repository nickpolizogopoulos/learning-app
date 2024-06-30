import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TurnLightsOff, TurnLightsOn } from './onoff.actions';


@Component({
  selector: 'app-two-basic-reducer-and-action-old-method',
  template: `
  
    <h4>2. Basic Store Setup by using the older syntax <span class="text-secondary h6">- boolean type</span></h4>
    <p class="lead">Lights on or off?</p>
    <div class="row mt-5 mb-5">    
        <div class="col d-flex justify-content-center">
            <svg (click)="setOn()" *ngIf="!(onOff$ | async)" xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-toggle-off" viewBox="0 0 16 16">
                <path d="M11 4a4 4 0 0 1 0 8H8a5 5 0 0 0 2-4 5 5 0 0 0-2-4zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8M0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5"/>
            </svg>
            
            <svg (click)="setOff()" *ngIf="onOff$ | async" xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-toggle-on" viewBox="0 0 16 16">
                <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8"/>
            </svg>
        </div>
        <div class="col d-flex justify-content-center">
            <svg *ngIf="onOff$ | async" xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-lightbulb-fill" viewBox="0 0 16 16">
                <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5"/>
            </svg>
            
            <svg *ngIf="!(onOff$ | async)" xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="currentColor" class="bi bi-lightbulb-off" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.23 4.35A6 6 0 0 0 2 6c0 1.691.7 3.22 1.826 4.31.203.196.359.4.453.619l.762 1.769A.5.5 0 0 0 5.5 13a.5.5 0 0 0 0 1 .5.5 0 0 0 0 1l.224.447a1 1 0 0 0 .894.553h2.764a1 1 0 0 0 .894-.553L10.5 15a.5.5 0 0 0 0-1 .5.5 0 0 0 0-1 .5.5 0 0 0 .288-.091L9.878 12H5.83l-.632-1.467a3 3 0 0 0-.676-.941 4.98 4.98 0 0 1-1.455-4.405zm1.588-2.653.708.707a5 5 0 0 1 7.07 7.07l.707.707a6 6 0 0 0-8.484-8.484zm-2.172-.051a.5.5 0 0 1 .708 0l12 12a.5.5 0 0 1-.708.708l-12-12a.5.5 0 0 1 0-.708"/>
            </svg>
        </div>
    </div>
    <p class="lead">The lights are 
        <u>
            <span [ngClass]="{'text-success': onOff$ | async, 'text-danger': !(onOff$ | async)}">{{(onOff$ | async) ? 'on' : 'off'}}</span>
            !
        </u>
    </p>
    <img *ngIf="!(onOff$ | async)" width="40" src="../../../assets/images/slightly-smiling-face_1f642.png">
  
  `,
  styles: [``]
})
export class TwoBasicReducerAndActionOldMethodComponent {

  onOff$!:Observable<boolean>;
  
  constructor (
    private store:Store<{ onOffState:boolean }>
  ) { 
    this.onOff$ = this.store.select('onOffState');
  }

  setOff():void {
    this.store.dispatch( new TurnLightsOff(false) );
  }

  setOn():void {
    this.store.dispatch( new TurnLightsOn(true) );
  }

}
