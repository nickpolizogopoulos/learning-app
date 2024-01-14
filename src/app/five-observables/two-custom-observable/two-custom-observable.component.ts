import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-two-custom-observable',
  template: `
  
  <h4>2. A Custom Observable</h4>
  <p class="lead">Woop-woop, that's the sound of da police.</p>
  <button (click)="play()" *ngIf="!playing" class="btn btn-sm btn-primary rounder-1">Play</button>
  <button (click)="stop()" *ngIf="playing" class="btn btn-sm btn-secondary rounder-1 mb-4">Stop</button>
  <div *ngIf="playing" [ngClass]="{'blueBg': counter % 2 !== 0, 'redBg': counter % 2 === 0 }" class="row" style="height: 30px;">
    <div [ngClass]="{'blueLightbar' : counter % 2 === 0}" class="col"></div>
    <div [ngClass]="{'redLightbar' : counter % 2 !== 0}" class="col"></div>
  </div>
  
  `,
  styles: [`
    .blueLightbar {background-color: rgb(50, 50, 255);}
    .redLightbar {background-color: rgb(255, 58, 58);}
    .blueBg {background-color: rgb(106, 153, 255);}
    .redBg {background-color: rgb(255, 146, 146);}
  `]
})
export class TwoCustomObservableComponent {

  playing:boolean = false;
  counter:number = 0;
  subscription?:Subscription;

  play():void {
    this.playing = true;
     const customObservable = Observable.create( (observer:any) => {
      let count = 0;
      setInterval( () => {
        observer.next(count);
        count++;
      }, 100)
    })

    this.subscription = customObservable.subscribe( (data:number) => this.counter = data )
  }

  stop():void {
    this.playing = false;
    this.subscription!.unsubscribe()
  }
}
